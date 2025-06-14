https://github.com/kim-hyun-jin-2008/high-school

* 간략히 한번 실행(내려 받은 다음 올리기)
```bash
git pull origin master; git add .; git commit -m '변경'; git push origin master
```

---

* 아래는 모두 같은 의미 입니다.
  - **서버에서 받기:** 가져오기, 내려받기, 다운로드(download), pull
  - **서버로 전송:** 올리기, 업로드(upload), 보내기, push

```bash
# 다른 컴퓨터에서 작업해 올린것 가져오기
git pull origin master

# Pull  직후 바로 되돌리기
git reset --hard HEAD~1

# 간략하게 명령 한번에 실행해 보내기(코멘트 부분은 변경해 주는것이 좋음)
git add .; git commit -m '변경'; git push origin master

# vscode에서 바로 올리는 방법


```
