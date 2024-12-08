import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
  return (
    <div>
      <Badge fontSize={"14px"} padding={2} borderRadius={3} colorScheme={score > 75 ? "green" : "yellow"}>{score}</Badge>
    </div>
  )
}

export default CriticScore
