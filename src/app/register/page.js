export default function page() {
  return (
    <div className="login__wrap">
      <div className="login__header">
        <h3>Join</h3>
        <p>로그인하려면 필요할껄?</p>
      </div>
      <form className="login__form" method="POST" action="/api/auth/signup">
        <fieldset>
          <legend className="blind">로그인 영역</legend>
          <div>
            <label htmlFor="youName" className="required blind">
              이름
            </label>
            <input
              type="text"
              id="youName"
              name="name"
              placeholder="이름"
              className="input__style"
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="youEmail" className="required blind">
              이메일
            </label>
            <input
              type="email"
              id="youEmail"
              name="email"
              placeholder="이메일"
              className="input__style"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="youPass" className="required blind">
              비밀번호
            </label>
            <input
              type="text"
              id="youPass"
              name="password"
              placeholder="비밀번호"
              className="input__style"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn__style2 mt30">
            회원가입
          </button>
        </fieldset>
      </form>
    </div>
  );
}
