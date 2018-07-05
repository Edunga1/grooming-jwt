# grooming-jwt

```bash
$ node .
token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1MzA3NjgzODksImV4cCI6MTUzMDc2ODM5MX0.KQ5kui1EsnXBDpUBTdGBde76wGO82eAcddD6_WSP3r4
secret maches ('wrong'): false
secret matches ('secret'): true
secret expires: true
```

1. 유효기간 2초의 token 생성.
1. 잘못된 secret 입력하여 verity 실패 확인
1. 올바른 secret 입력하여 verity 성공 확인
1. 2.5초 후 올바른 secret 입력하여 verify 실패 확인 (expired)
