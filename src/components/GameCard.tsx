import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-crop";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card boxShadow='lg'>
      <Image
        src={getCroppedImageUrl(game.background_image)}
      ></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((pp) => pp.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2x1">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;