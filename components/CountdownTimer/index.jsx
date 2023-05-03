import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

const CountdownTimer = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function calculateRemainingTime() {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const { days, hours, minutes } = remainingTime;
  return (
    <Text fontWeight={"bold"} fontSize={"2xl"}>
      Corra! Você possui apenas {days} dias, {hours} horas e {minutes} minutos
      para concluir sua inscrição
    </Text>
  );
};

export default CountdownTimer;
