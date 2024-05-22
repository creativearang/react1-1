import React, { useState, useEffect } from "react";
import useCounter from "./UseCounter";

const MAX_CAPACITY = 10;
const MIN_CAPACITY = 0;
export default function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    // console.log("=================");
    // console.log("useEffect() is called");
    // console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]);
  useEffect(() => {
    setIsEmpty(count <= MIN_CAPACITY);
  }, [count]);

  return (
    <div style={{ pading: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount} disabled={isEmpty}>
        퇴장
      </button>
      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
      {isEmpty && <p style={{ color: "green" }}>아무도 없습니다.</p>}
    </div>
  );
}
