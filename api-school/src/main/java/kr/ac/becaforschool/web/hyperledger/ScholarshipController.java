package kr.ac.becaforschool.web.hyperledger;

import kr.ac.becaforschool.domain.hyperledger.Scholarship;
import kr.ac.becaforschool.model.response.ListResult;
import kr.ac.becaforschool.model.response.SingleResult;
import kr.ac.becaforschool.service.ResponseService;
import kr.ac.becaforschool.web.dto.hyperledgerDto.ScholarshipEnrollDto;
import org.hyperledger.fabric.gateway.*;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeoutException;


// 학교측에서 hyperledger nw에 evaluate transaction을 날릴 때


@RequiredArgsConstructor
@RestController
@RequestMapping(value="/school")
@CrossOrigin(origins = "http://localhost:3000")
public class ScholarshipController {

    static {

        System.setProperty("org.hyperledger.fabric.sdk.service_discovery.as_localhost", "true");
    }

    private final ResponseService responseService;
    Path walletPath = Paths.get("wallet");
    Path networkConfigPath = Paths.get("connection.json");
    Gateway.Builder builder = Gateway.createBuilder();

    // 장학금 하나 쿼링. 장학금 아이디로 쿼링
    // EX  GET /school/scholarships
    @GetMapping(value = "/scholarships/{scholarshipid}")
    public SingleResult<Scholarship> queryOne(@PathVariable String scholarshipid) throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        Scholarship scholarship;
        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.evaluateTransaction("readScholarship", scholarshipid);

            scholarship = Scholarship.deserialize(result);
            return responseService.getSingleResult(scholarship);

        } catch (GatewayException e) {
            e.printStackTrace();
            return null;
        }
    }

    // 전체 장학금 쿼링
    @GetMapping(value = "/scholarships")
    public ListResult<Scholarship> queryAllScholarship() throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.evaluateTransaction("readAllScholarships");
            List<Scholarship> scholarships = Scholarship.listDeserialize(result);

            return responseService.getListResult(scholarships);

        } catch (GatewayException e) {
            e.printStackTrace();
            return (ListResult<Scholarship>) responseService.getFailResult();
        }
    }


    // 장학금 등록
    @PostMapping(value = "/scholarships")
    public SingleResult<Scholarship> enroll(@RequestBody ScholarshipEnrollDto requestDto) throws IOException {

        Wallet wallet = Wallet.createFileSystemWallet(walletPath);

        builder.identity(wallet, "admin").networkConfig(networkConfigPath).discovery(true);

        // create a gateway connection
        try (Gateway gateway = builder.connect()) {

            // get the network and contract
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("scholarship");

            // 여기서부터 좀 고민
            byte[] result = contract.submitTransaction("enrollScholarship", requestDto.getScholarshipName(), requestDto.getSemester(),
                    requestDto.getMaturityDateTime(), requestDto.getFoundation(), Integer.toString(requestDto.getFaceValue()), Integer.toString(requestDto.getSemesterLimitMin()),
                    Integer.toString(requestDto.getSemesterLimitMax()), Float.toString(requestDto.getGradeLimit()), requestDto.getMajorLimit(), Integer.toString(requestDto.getTotalNum()));

           Scholarship scholarship = Scholarship.deserialize(result);
            return responseService.getSingleResult(scholarship);

        } catch (GatewayException | InterruptedException | TimeoutException e){
            e.printStackTrace();
            return (SingleResult<Scholarship>) responseService.getFailResult();
        }
    }


    // 장학금 수정


    // 장하금 만료시키기




}