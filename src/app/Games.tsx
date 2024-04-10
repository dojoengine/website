import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Wave } from "./hero/Wave";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";

const allGames = [
  {
    name: "Eykar",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={72}
        height={73}
        fill="none"
      >
        <path
          fill="#fff"
          d="M60 36.021c0-6.416-2.517-12.232-6.616-16.539l-.136.136-1.009 9.951L32.91 47.444l1.082 1.082-.918.917-.773-.772-.554.318 3.599 2.68-3.862 1.255s-2.363-2.672-2.654-2.39c-.29.282-.754.109-.754.109l-1.082-1.081-.436.436-.936-.936-5.216 5.216a23.906 23.906 0 0 0 15.576 5.752c13.258 0 24-10.741 24-24l.018-.009ZM23.714 47.09l-.936-.936.436-.436-1.081-1.082s-.182-.463.109-.754c.29-.29-2.39-2.654-2.39-2.654l1.254-3.862 2.68 3.599.319-.555-.773-.772.918-.918 1.081 1.082L43.206 20.49l9.951-1.009.11-.109A23.854 23.854 0 0 0 36 12.021c-13.25 0-24 10.742-24 24 0 6.316 2.444 12.06 6.434 16.349l5.28-5.28Z"
        />
      </svg>
    ),
  },
  {
    name: "Eykar",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={72}
        height={73}
        fill="none"
      >
        <path
          fill="#fff"
          d="M60 36.021c0-6.416-2.517-12.232-6.616-16.539l-.136.136-1.009 9.951L32.91 47.444l1.082 1.082-.918.917-.773-.772-.554.318 3.599 2.68-3.862 1.255s-2.363-2.672-2.654-2.39c-.29.282-.754.109-.754.109l-1.082-1.081-.436.436-.936-.936-5.216 5.216a23.906 23.906 0 0 0 15.576 5.752c13.258 0 24-10.741 24-24l.018-.009ZM23.714 47.09l-.936-.936.436-.436-1.081-1.082s-.182-.463.109-.754c.29-.29-2.39-2.654-2.39-2.654l1.254-3.862 2.68 3.599.319-.555-.773-.772.918-.918 1.081 1.082L43.206 20.49l9.951-1.009.11-.109A23.854 23.854 0 0 0 36 12.021c-13.25 0-24 10.742-24 24 0 6.316 2.444 12.06 6.434 16.349l5.28-5.28Z"
        />
      </svg>
    ),
  },
  {
    name: "Eykar",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={72}
        height={73}
        fill="none"
      >
        <path
          fill="#fff"
          d="M60 36.021c0-6.416-2.517-12.232-6.616-16.539l-.136.136-1.009 9.951L32.91 47.444l1.082 1.082-.918.917-.773-.772-.554.318 3.599 2.68-3.862 1.255s-2.363-2.672-2.654-2.39c-.29.282-.754.109-.754.109l-1.082-1.081-.436.436-.936-.936-5.216 5.216a23.906 23.906 0 0 0 15.576 5.752c13.258 0 24-10.741 24-24l.018-.009ZM23.714 47.09l-.936-.936.436-.436-1.081-1.082s-.182-.463.109-.754c.29-.29-2.39-2.654-2.39-2.654l1.254-3.862 2.68 3.599.319-.555-.773-.772.918-.918 1.081 1.082L43.206 20.49l9.951-1.009.11-.109A23.854 23.854 0 0 0 36 12.021c-13.25 0-24 10.742-24 24 0 6.316 2.444 12.06 6.434 16.349l5.28-5.28Z"
        />
      </svg>
    ),
  },
  {
    name: "Eykar",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={72}
        height={73}
        fill="none"
      >
        <path
          fill="#fff"
          d="M60 36.021c0-6.416-2.517-12.232-6.616-16.539l-.136.136-1.009 9.951L32.91 47.444l1.082 1.082-.918.917-.773-.772-.554.318 3.599 2.68-3.862 1.255s-2.363-2.672-2.654-2.39c-.29.282-.754.109-.754.109l-1.082-1.081-.436.436-.936-.936-5.216 5.216a23.906 23.906 0 0 0 15.576 5.752c13.258 0 24-10.741 24-24l.018-.009ZM23.714 47.09l-.936-.936.436-.436-1.081-1.082s-.182-.463.109-.754c.29-.29-2.39-2.654-2.39-2.654l1.254-3.862 2.68 3.599.319-.555-.773-.772.918-.918 1.081 1.082L43.206 20.49l9.951-1.009.11-.109A23.854 23.854 0 0 0 36 12.021c-13.25 0-24 10.742-24 24 0 6.316 2.444 12.06 6.434 16.349l5.28-5.28Z"
        />
      </svg>
    ),
  },
  {
    name: "Eykar",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={72}
        height={73}
        fill="none"
      >
        <path
          fill="#fff"
          d="M60 36.021c0-6.416-2.517-12.232-6.616-16.539l-.136.136-1.009 9.951L32.91 47.444l1.082 1.082-.918.917-.773-.772-.554.318 3.599 2.68-3.862 1.255s-2.363-2.672-2.654-2.39c-.29.282-.754.109-.754.109l-1.082-1.081-.436.436-.936-.936-5.216 5.216a23.906 23.906 0 0 0 15.576 5.752c13.258 0 24-10.741 24-24l.018-.009ZM23.714 47.09l-.936-.936.436-.436-1.081-1.082s-.182-.463.109-.754c.29-.29-2.39-2.654-2.39-2.654l1.254-3.862 2.68 3.599.319-.555-.773-.772.918-.918 1.081 1.082L43.206 20.49l9.951-1.009.11-.109A23.854 23.854 0 0 0 36 12.021c-13.25 0-24 10.742-24 24 0 6.316 2.444 12.06 6.434 16.349l5.28-5.28Z"
        />
      </svg>
    ),
  },
  {
    name: "Eykar",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={72}
        height={73}
        fill="none"
      >
        <path
          fill="#fff"
          d="M60 36.021c0-6.416-2.517-12.232-6.616-16.539l-.136.136-1.009 9.951L32.91 47.444l1.082 1.082-.918.917-.773-.772-.554.318 3.599 2.68-3.862 1.255s-2.363-2.672-2.654-2.39c-.29.282-.754.109-.754.109l-1.082-1.081-.436.436-.936-.936-5.216 5.216a23.906 23.906 0 0 0 15.576 5.752c13.258 0 24-10.741 24-24l.018-.009ZM23.714 47.09l-.936-.936.436-.436-1.081-1.082s-.182-.463.109-.754c.29-.29-2.39-2.654-2.39-2.654l1.254-3.862 2.68 3.599.319-.555-.773-.772.918-.918 1.081 1.082L43.206 20.49l9.951-1.009.11-.109A23.854 23.854 0 0 0 36 12.021c-13.25 0-24 10.742-24 24 0 6.316 2.444 12.06 6.434 16.349l5.28-5.28Z"
        />
      </svg>
    ),
  },
];

export default function Games() {
  return (
    <Container>
      <Wave />
      <Flex w="140%" gap={28} alignItems="center">
        <Box flexBasis="30%">
          <Box mb={7}>
            <Badge
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  fill="none"
                >
                  <path
                    fill="#03152E"
                    d="M16.145 7.526a3.468 3.468 0 0 1-2.475 3.323v3.112h-1.98V10.85a3.466 3.466 0 1 1 4.455-3.323Zm-4.207-.495a.74.74 0 0 0 .742-.742.74.74 0 0 0-.742-.743.74.74 0 0 0-.743.743.74.74 0 0 0 .742.742Zm-4.208 7.92a.989.989 0 1 1 1.98 0h7.92c1.092 0 1.98.888 1.98 1.98v.99c0 1.092-.888 1.98-1.98 1.98h-9.9a1.982 1.982 0 0 1-1.98-1.98v-.99c0-1.092.888-1.98 1.98-1.98Z"
                  />
                </svg>
              }
              text="On Dojo"
              color="badge.yellow"
            />
          </Box>
          <Text textStyle="headline2">Press start</Text>
          <Text textStyle="bodyText">
            Here is a medium length paragraph about our games. We can discuss
            how they’re created or other relevant details in this section.
          </Text>
        </Box>
        <Grid gridTemplate="repeat(2, 20vw) / repeat(3, 20vw)" gridGap={5}>
          {allGames.map((game, i) => (
            <Flex
              key={i}
              border="1px solid"
              borderColor="stroke.purple"
              borderRadius={16}
              p={6}
              flexDir="column"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              {game.logo}
              <Text textStyle="title3" alignSelf="flex-start">
                {game.name}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Container>
  );
}
