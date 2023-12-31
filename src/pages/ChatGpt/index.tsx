import * as S from "./styles";

function ChatGpt() {
  const options = {
    method: "POST",
    body: JSON.stringify({
      message: "hello!",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getMessages = async () => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <S.Container>
      <S.SideBarSection>
        <S.Button>+ New Chat</S.Button>
        <S.Ul>
          <li>My First Chat</li>
        </S.Ul>
        <S.Nav>
          <p>Made by Whale2200d</p>
        </S.Nav>
      </S.SideBarSection>
      <S.MainSection>
        <h1>Whale GPT</h1>
        <ul></ul>
        <S.BottomSectionContainer>
          <S.InputContainer>
            <input />
            <div onClick={getMessages}>submit</div>
          </S.InputContainer>
          <S.InfoParagraph>
            Chat GPT Mar 14 Version. Free Research Preview. Our goal is to make
            AI systems more natural and safe to interact with. Your feedback
            will help us imporve.
          </S.InfoParagraph>
        </S.BottomSectionContainer>
      </S.MainSection>
    </S.Container>
  );
}

export default ChatGpt;
