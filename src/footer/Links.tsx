import { Container } from "@/components/Container";
import { Center, Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";

const linkGroups = [
  {
    header: "DOJO",
    links: [
      { text: "Careers", href: "/careers" },
      { text: "Documentation", href: "/documentation" },
      { text: "Sitemap", href: "/sitemap" },
      { text: "Legal", href: "/legal" },
    ],
  },
  {
    header: "TECH",
    links: [
      { text: "Sozo", href: "/sozo" },
      { text: "Torii", href: "/torii" },
      { text: "World Explorer", href: "/world-explorer" },
      { text: "Cartridge", href: "/cartridge" },
    ],
  },
  {
    header: "DOJO2",
    links: [
      { text: "Careers", href: "/careers" },
      { text: "Documentation", href: "/documentation" },
      { text: "Sitemap", href: "/sitemap" },
      { text: "Legal", href: "/legal" },
    ],
  },
];

export function Links() {
  return (
    <Container>
      <Flex py="100px" justifyContent="space-between" alignItems="flex-end">
        <HStack gap="100px" fontFamily="Circular LL">
          {linkGroups.map((group) => (
            <VStack key={group.header} alignItems="flex-start" gap={8}>
              <Text
                fontFamily="IBM Plex Mono SemiBold"
                color="text.purple"
                fontWeight="600"
              >
                {group.header}
              </Text>
              <VStack alignItems="flex-start" gap={1}>
                {group.links.map((link) => (
                  <Link
                    key={link.text}
                    fontFamily="IBM Plex Mono Light"
                    href={link.href}
                    target="_blank"
                    color="#A7C9F8"
                  >
                    {link.text}
                  </Link>
                ))}
              </VStack>
            </VStack>
          ))}
        </HStack>
        <HStack>
          <Link href="https://telegram.com" target="_blank">
            <Center bg="#24356C" borderRadius="full" p={1.5}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={23}
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M17.375 5.388c-.245-.208-.631-.238-1.03-.078-.42.168-11.877 5.083-12.343 5.283-.085.03-.826.306-.75.922.069.555.664.785.737.811l2.912.998c.194.643.906 3.016 1.063 3.523.099.316.259.731.54.817.246.095.49.008.65-.116l1.78-1.652 2.875 2.242.068.04c.195.087.382.13.56.13.139 0 .27-.026.397-.077.431-.177.603-.588.621-.634l2.147-11.16c.131-.597-.05-.9-.227-1.049ZM9.47 13.723l-.982 2.62-.983-3.275L15.038 7.5 9.47 13.723Z"
                />
              </svg>
            </Center>
          </Link>
          <Link href="https://github.com" target="_blank">
            <Center bg="#24356C" borderRadius="full" p={1.5}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={23}
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M9.943 14.075c0 .666-.347 1.757-1.17 1.757-.822 0-1.17-1.09-1.17-1.757 0-.666.348-1.756 1.17-1.756.823 0 1.17 1.09 1.17 1.756Zm9.368-1.61c0 1.017-.102 2.095-.558 3.029-1.208 2.441-4.529 2.384-6.907 2.384-2.416 0-5.935.086-7.19-2.384-.466-.925-.645-2.012-.645-3.028 0-1.336.443-2.598 1.323-3.621a4.99 4.99 0 0 1-.245-1.556c0-.685.156-1.03.465-1.651 1.444 0 2.368.287 3.468 1.147a12.21 12.21 0 0 1 2.827-.318c.86 0 1.728.092 2.563.293 1.084-.851 2.008-1.122 3.436-1.122.313.622.466.966.466 1.651 0 .523-.083 1.042-.246 1.536.877 1.033 1.243 2.305 1.243 3.64Zm-2.05 1.61c0-1.4-.85-2.633-2.342-2.633-.603 0-1.18.109-1.785.192-.475.073-.95.102-1.438.102-.484 0-.96-.03-1.437-.102-.596-.083-1.18-.192-1.785-.192-1.492 0-2.343 1.234-2.343 2.633 0 2.799 2.563 3.23 4.794 3.23h1.536c2.241 0 4.8-.428 4.8-3.23ZM14.63 12.32c-.823 0-1.17 1.09-1.17 1.756 0 .666.347 1.757 1.17 1.757.822 0 1.17-1.09 1.17-1.757 0-.666-.348-1.756-1.17-1.756Z"
                />
              </svg>
            </Center>
          </Link>
          <Link href="https://discord.com" target="_blank">
            <Center bg="#24356C" borderRadius="full" p={1.5}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={23}
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M16.318 6.896a.04.04 0 0 0-.02-.018 12.668 12.668 0 0 0-3.126-.97.047.047 0 0 0-.05.025c-.143.26-.273.526-.39.799a11.696 11.696 0 0 0-3.51 0 8.086 8.086 0 0 0-.395-.8.05.05 0 0 0-.05-.023c-1.08.186-2.131.512-3.126.969a.045.045 0 0 0-.021.018c-1.99 2.973-2.536 5.872-2.269 8.736a.053.053 0 0 0 .02.036 12.736 12.736 0 0 0 3.835 1.938.05.05 0 0 0 .054-.018 9.09 9.09 0 0 0 .784-1.275.048.048 0 0 0-.01-.057.048.048 0 0 0-.016-.01 8.385 8.385 0 0 1-1.198-.572.05.05 0 0 1-.005-.081c.08-.06.16-.123.238-.187a.048.048 0 0 1 .05-.006c2.512 1.147 5.233 1.147 7.717 0a.048.048 0 0 1 .05.006c.077.063.157.126.238.187a.05.05 0 0 1-.004.081 7.869 7.869 0 0 1-1.198.57.049.049 0 0 0-.026.068c.23.444.491.87.783 1.275a.048.048 0 0 0 .054.018 12.692 12.692 0 0 0 3.841-1.937.05.05 0 0 0 .02-.035c.32-3.311-.536-6.187-2.27-8.737ZM8.429 13.89c-.756 0-1.38-.695-1.38-1.547 0-.853.612-1.548 1.38-1.548.775 0 1.393.7 1.38 1.547 0 .853-.61 1.548-1.38 1.548Zm5.103 0c-.757 0-1.38-.695-1.38-1.547 0-.853.611-1.548 1.38-1.548.775 0 1.392.7 1.38 1.547 0 .853-.605 1.548-1.38 1.548Z"
                />
              </svg>
            </Center>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}
