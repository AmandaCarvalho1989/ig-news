import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}
export const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  priceId,
}) => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
};
