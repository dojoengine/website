"use client";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

export const homeCodeExample = `#[dojo::contract]
mod player_actions {
    use starknet::{ContractAddress, get_caller_address};
    use super::{Position, Vec2};
    use super::IPlayerActions;

    #[external(v0)]
    impl PlayerActionsImpl of IPlayerActions<ContractState> {
        fn spawn(self: @ContractState) {
            // Access the world dispatcher for reading.
            let world = self.world_dispatcher.read();

            // get player address
            let player = get_caller_address();

            // dojo command - get player position
            let position = get!(world, player, (Position));

            // dojo command - set player position
            set!(world, (Position { player, vec: Vec2 { x: 10, y: 10 } }));
        }
    }
}
`;

export const Code = ({ text, language = "rust" }: { text: string; language?: string }) => {
  return (
    <>
      <CopyBlock
        /* @ts-expect-error */
        language={language}
        text={text}
        theme={{ ...dracula, backgroundColor: "#031125" }}
        codeBlock={true}
        wrapLines
        customStyle={{
          fontSize: "0.75rem",
        }}
      />
    </>
  );
};
