import styled from "styled-components";

const RightSide = (props) => {
  return (
    <Container>
      <Followcard>
        <Tittle>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Tittle>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#LnkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
      </Followcard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightSide;
`;

const Followcard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  padding: 12px;
`;

const Tittle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export default RightSide;
