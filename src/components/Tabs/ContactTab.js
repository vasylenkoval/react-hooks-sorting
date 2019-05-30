import React from "react";
import { Text, SocialIcons } from "styles/reusableStyles";

const ContactTab = () => {
  return (
    <>
      <Text expandedText>Hi everyone!</Text>
      <Text expandedText>
        My name is Valentyn and I am a web developer from Toronto.
      </Text>
      <Text expandedText>
        I am job hunting right now, so if you're hiring and like what you're
        seeing feel free to reach out!
      </Text>
      <a
        target="_blank"
        href="https://github.com/vasylenkoval/react-hooks-sorting"
      >
        <SocialIcons.Github />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/valentyn-vasylenko-bb36aa90/"
      >
        <SocialIcons.Linkedin />
      </a>
      <a target="_blank" href="https://twitter.com/valvasylenko_">
        <SocialIcons.Twitter />
      </a>
    </>
  );
};

export default ContactTab;
