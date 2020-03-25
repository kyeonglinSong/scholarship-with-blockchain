package kr.ac.becaforschool.web.hyperledger;

import io.swagger.annotations.Api;
import kr.ac.becaforschool.domain.hyperledger.Applying;
import kr.ac.becaforschool.domain.hyperledger.Scholarship;
import kr.ac.becaforschool.model.response.ListResult;
import kr.ac.becaforschool.model.response.SingleResult;
import kr.ac.becaforschool.service.ResponseService;
import kr.ac.becaforschool.web.dto.hyperledgerDto.ApplyingDto;
import kr.ac.becaforschool.web.dto.hyperledgerDto.ScholarshipEnrollDto;
import lombok.RequiredArgsConstructor;
import org.hyperledger.fabric.gateway.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.TimeoutException;

@RequiredArgsConstructor
@RestController
@RequestMapping(value="/school")
public class ApplyingController {

    static {

        System.setProperty("org.hyperledger.fabric.sdk.service_discovery.as_localhost", "true");
    }

    private final ResponseService responseService;
    Path walletPath = Paths.get("wallet");
    Path networkConfigPath = Paths.get("connection.json");
    Gateway.Builder builder = Gateway.createBuilder();


    // 장학금에 지원 (학생)
    // 장학금 등록
    @PostMapping(value = "/applyings")
    public SingleResult<Applying> enroll(@RequestBody ApplyingDto requestDto) throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.submitTransaction("applyingToScholarship", requestDto.getSemester(), requestDto.getName(),
                    requestDto.getStudentId(), requestDto.getUniversity(), requestDto.getCollege(), requestDto.getMajor(),
                   Integer.toString(requestDto.getCompleteSemester()), Float.toString(requestDto.getGrade()), Integer.toString(requestDto.getTuition()),
                    requestDto.getScholarshipId());

            Applying applying = Applying.deserialize(result);
            return responseService.getSingleResult(applying);

        } catch (GatewayException | InterruptedException | TimeoutException e){
            e.printStackTrace();
            return (SingleResult<Applying>) responseService.getFailResult();
        }
    }



    // 전체 장학금 리턴



    /*

    // 장학금 번호로 지원들 쿼링.
    @GetMapping(value = "/applyings")
    public ListResult<Applying> queryByScholarship(@RequestParam String scholarshipid) throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        Applying applying;
        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.evaluateTransaction("readApplyingByScholarshipId", scholarshipid);

            applying = Applying.deserialize(result);
            return null;

        } catch (GatewayException e) {
            e.printStackTrace();
            return null;
        }
    }

    // 학생정보로 지원들 쿼링
    @GetMapping(value = "/applyings")
    public ListResult<Applying> queryByStudentInfo(@PathVariable String applyingId) throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        Applying applying;
        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.evaluateTransaction("readApplyingByScholarshipId");

            applying = Applying.deserialize(result);
            return null;

        } catch (GatewayException e) {
            e.printStackTrace();
            return null;
        }
    }
*/
}
