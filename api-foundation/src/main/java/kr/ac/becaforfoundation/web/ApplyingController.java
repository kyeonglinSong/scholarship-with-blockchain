package kr.ac.becaforfoundation.web;

import kr.ac.becaforfoundation.domain.hyperledger.Applying;
import kr.ac.becaforfoundation.response.ListResult;
import kr.ac.becaforfoundation.response.SingleResult;
import kr.ac.becaforfoundation.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.hyperledger.fabric.gateway.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.concurrent.TimeoutException;

@RequiredArgsConstructor
@RestController
@RequestMapping(value="/foundation")
public class ApplyingController {

    static {

        System.setProperty("org.hyperledger.fabric.sdk.service_discovery.as_localhost", "true");
    }

    private final ResponseService responseService;
    Path walletPath = Paths.get("wallet");
    Path networkConfigPath = Paths.get("connection.json");
    Gateway.Builder builder = Gateway.createBuilder();



    // 장학금 번호로 지원들 쿼링. : ok
    @GetMapping(value = "/applyings/{scholarshipId}")
    public ListResult<Applying> queryApplyingsByScholarship(@PathVariable String scholarshipId) throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        Applying applying;
        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.evaluateTransaction("readAllApplyingsbyScholarship", scholarshipId);
            List<Applying> applyings = Applying.listDeserialize(result);

            return responseService.getListResult(applyings);


        } catch (GatewayException e) {
            e.printStackTrace();
            return null;
        }
    }

    // 학생정보로 지원들 쿼링:ok
    @GetMapping(value = "/applyings")
    public ListResult<Applying> queryApplyingsByStudentInfo(@RequestParam String university, @RequestParam String studentId) throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        Applying applying;
        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.evaluateTransaction("readAllApplyingsbyStudent", university, studentId);
            List<Applying> applyings = Applying.listDeserialize(result);

            return responseService.getListResult(applyings);

        } catch (GatewayException e) {
            e.printStackTrace();
            return null;
        }
    }

    // 선발 / 선발취소하기
    @PutMapping(value="/applyings/{applyingId}")
    public SingleResult<Applying> selectStudent(@PathVariable String applyingId) throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.submitTransaction("updateSelection", applyingId);
            Applying applying = Applying.deserialize(result);

            return responseService.getSingleResult(applying);

        } catch (GatewayException |InterruptedException |TimeoutException e) {
            e.printStackTrace();
            return null;
        }
    }


}
