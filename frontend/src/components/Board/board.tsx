import "./boardStyle.css";

const Board = () => {
  return (
    <>
      <div className="boardContainer">
        <div className="board-columns">
          <div className="column">
            <header>Brainstorm</header>
            <ul>
              <li>First</li>
              <li>Sirst</li>
            </ul>
            <footer>Add another card</footer>
          </div>

          <div className="column">
            <header>Brainstorm</header>
            <ul>
              <li>First</li>
              <li>Sirst</li>
            </ul>
            <footer>Add another card</footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
