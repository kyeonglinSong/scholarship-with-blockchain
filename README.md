 [![license](https://img.shields.io/badge/license-Apache%202.0-red.svg)](https://www.apache.org/licenses/LICENSE-2.0)  
 
# Scholarship-With-Blockchain
대학생을 위한 블록체인 기반 국가 및 법인 장학금 지급 및 기록(관리) 통합 시스템  
  
> 2019 IBM '더 나은 교육을 위한 블록체인' 사회공헌 프로젝트 선정  
> 2020 한국정보보호학회 하계학술대회(CISCS2020) - 하이퍼레저 패브릭 기반의 장학금 지급 및 관리 통합 시스템 개발(논문)  




  
![img](https://blogfiles.pstatic.net/MjAyMDA1MDFfOTQg/MDAxNTg4MzEyOTg3Nzg3.2Aan0_ts2fc3J4j5vYQ9lSBIA1u3XkhX-WBGMYLTobgg.Me3WVxMpHi8epTPDHZjiSAm-tDEirf9jK5CHOREYE5gg.PNG.byeol0714/KakaoTalk_20200501_150104444.png)
  
 기존 장학금 지급 및 관리 프로세스는 복잡한 신청 및 처리 절차, 이중수혜와 같은 문제로 인해 공정하고 효율적인 장학금 분배가 어렵다. 따라서 보다 효과적으로 학생들의 장학금 수혜 내역을 관리하고 장학금을 지급할 수 있는 새로운 통합 시스템 ‘하이퍼레저 기반 장학금 통합관리시스템’을 제안한다. 프라이빗 블록체인 플랫폼인 하이퍼레저를 활용해 권한형 블록체인 시스템안에서 스마트 컨트랙트를 작동시킨다면, 공유 원장 아래서 학생들의 모든 장학금 지급 내역은 실시간으로 기록될 수 있다.

 본 시스템은 블록체인 네트워크 개발에 하이레저 패브릭을 사용하여 공유 원장 아래서 학생들의 모든 장학금 지급 내역은 실시간으로 기록되게 하였다. 이를 통해 장학금이라는 자본의 이동을 기관들이 즉각적으로 조회할 수 있고, 그에 따라 장학금 산정을 정확하고 빠르게 완료할 수 있다. 

 애플리케이션의 프론트엔드는 리액트(React)로, API는 스프링 부트(Springboot)로, 체인코드는 자바(Java)로 작성되었다. API와 블록체인 네트워크는 IBM 클라우드에 배포할 예정이다.
 


## 시작하기

### 1. 환경
- node.js
  
### 2. dependency 설치
#### 재단용 애플리케이션
```bash
git clone -b foundationApp https://github.com/kyeonglinSong/scholarship-with-blockchain.git
npm install
```
#### 학교용 애플리케이션
```bash
git clone -b universityApp https://github.com/kyeonglinSong/scholarship-with-blockchain.git
npm install
```

  
### 3. 애플리케이션 실행
```bash
npm install
``` 
  
Open http://localhost:3000 to view it in the browser.  
  
### 4. 사용방법

#### 재단용 애플리케이션

- 재단직원용 계정

  ```
  ID : f1234567
  PW : f1234567  
  ```

  

#### 학생용 애플리케이션

- 학생용 계정

  ```
  ID : 2001001 
  PW : 2001001  
  ```

- 교직원용 계정

  ```
  ID : e1234567
  PW : e1234567  
  ```
  
  (클라우드에 배포 후 더 작성)
  
### 실행 화면

- 재단직원용 계정
![img](https://postfiles.pstatic.net/MjAyMDA1MDFfMTM2/MDAxNTg4MzE0MjEyNDE3.gwUjP1VpE7szgp1w0KSdfxnHD2LVww30YeMoYVCitW0g.pWWCPkm6w5LDw-Q2PymFzxxpHh8je7l6LSKiVic2EDsg.PNG.byeol0714/Main_3.png?type=w966)
  
  
- 학생용 계정 로그인
![img](https://postfiles.pstatic.net/MjAyMDA1MDFfMTcz/MDAxNTg4MzE0MjEyMzY4.nqGwARMS6cGcfY3Bpey0elGELF35GDzFaUt0YdMpvOEg.s0hPqe-d4FPtBZIwSEcfp8ww0DL11THK3V1P-KHppGUg.PNG.byeol0714/Main_1.png?type=w966)
  
  
- 교직원용 계정 로그인
![img](https://postfiles.pstatic.net/MjAyMDA1MDFfMTAx/MDAxNTg4MzE0MjEyMzcz.wczAtfyCsb2pcyL-mx04xeZPK8VtaIiFqh26dJZdALUg.LJRX6dPZ4bR_76WGu6f3n-tI-3LDckHs2mi2xy6QUnYg.PNG.byeol0714/Main_2.png?type=w966)
  
  
  
## Author

![img](https://lh5.googleusercontent.com/qApbyW2FzEe_ww93kzEFdXhz6CXNZi6qDzUAeCKWL4ymyjTdBl7p_inMRz629yg3vJzMy6iYdvLbLT1GIFOWOVEFmFnHzzHKADz2pMsOv2NHm15qREFceEaaHMhnIR-KusKnHdAHrg)



2019 하반기 - 2020 상반기 이화여자대학교 컴퓨터공학과 졸업프로젝트 16조 **Team ELLIE**

- 1615032 송경린 (Kyeonglin Song) blossommilktea@gmail.com
- 1401110 김은별 (Eunbyeol Kim) kebinkorea@gmail.com
- 1614037 최윤영 (Yunyeong Choi) 0000yunyoung0000@gmail.com  
- 1602119 최찬미 (Chanmi Choi) judith0616@gmail.com


## License

- Apache 2.0 
  
