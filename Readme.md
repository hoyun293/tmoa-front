# 적금 계산기

간단하지만 적금 계산기를 만들어봤습니다.

처음 시작시, '상품을 선택하세요' SELECT 탭을 '적금'으로 변경하면 값들이 자동으로 계산됩니다.
각 input에 숫자만을 넣어야 작동합니다.

# 기존의 적금계산기를 NETLIFY에 올려보았습니다.

1. git clone
2. npm install (package.json에 명시된 패키지를 모두 받습니다)
3. yarn dev 명령어로 실행

   \*만약 yarn dev 커맨드 입력 이후 "listen EACCESS: permission denied" 라는 에러메세지가 등장하면
   webpack.config.js 에서 const = port process.env.PORT || 8080의 8080을 '8081'로 바꿔주세요
   (netstat명령어로 8080포트가 다른 프로세스에서 사용하고 있는지 확인해도 리스트에 나오지는 않았으나 8081로 바꿔주어 에러가 나지않았습니다.)
