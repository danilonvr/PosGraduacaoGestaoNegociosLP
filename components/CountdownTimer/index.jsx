import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import moment from "moment";

const CountdownTimer = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function calculateRemainingTime() {
    const now = moment();
    const target = moment(targetDate);
    const diff = target.diff(now);
    return moment.duration(diff);
  }

  const days = remainingTime.days();
  const hours = remainingTime.hours();
  const minutes = remainingTime.minutes();

  return (
    <Text fontWeight={"bold"} fontSize={"2xl"}>
      Corra! Você possui apenas {days} dias, {hours} horas e {minutes} minutos
      para concluir sua inscrição
    </Text>
  );
};

export default CountdownTimer;
