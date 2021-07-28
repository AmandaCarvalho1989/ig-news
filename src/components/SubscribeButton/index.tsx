import { signIn, useSession } from "next-auth/client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}
export const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  priceId,
}) => {
  const [session] = useSession();
  const handleSubscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
};
