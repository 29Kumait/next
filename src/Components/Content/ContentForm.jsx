import { useActionState } from "react";
import stylex from "@stylexjs/stylex";
import styles from "../../styles.stylex.jsx";
import { fetchCreateContent } from "./FetchContent.js";

export default function ContentForm() {
  async function ContentFormRequest(prevState, formData) {
    const description = formData.get("description");
    try {
      const content = await fetchCreateContent({ description });

      if (!content) {
        return { success: false, message: "Content not saved" };
      }
      return { success: true, message: "Content saved successfully" };
    } catch (error) {
      return { success: false, message: error.toString() };
    }
  }

  const [formState, action] = useActionState(ContentFormRequest, {
    success: null,
    message: "",
  });

  return (
    <>
      <form action={action} {...stylex.props(stylesContentForm.form)}>
        <textarea
          name="description"
          placeholder=" ⓣ🅈ⓟⒺ"
          rows={4}
          cols={40}
          required
          {...stylex.props(stylesContentForm.textarea)}
        />
        <button type="submit" {...stylex.props(styles.button)}>
          Save
        </button>
      </form>

      {formState.message && <p>{formState.message}</p>}
    </>
  );
}

const stylesContentForm = stylex.create({
  form: {
    maxWidth: 380,
    marginStart: "auto",
    marginEnd: "auto",
    marginBottom: 34,
  },
  textarea: {
    backgroundColor: "transparent",
    borderStyle: "none",
    boxSizing: "border-box",
    color: "var(--primary-text)",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 1.25,
    paddingBottom: 10,
    paddingEnd: 16,
    paddingTop: 26,
    width: "100%",
    alignSelf: "center",
  },
});
