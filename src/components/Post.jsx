import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/14796276?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Almeida Miranda Deijaí</strong>
            <span>Mobile Developer</span>
          </div>
        </div>

        <time title="12 de julho de 2023" dateTime="2023-07-12 08:20:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>#SoundsLike (United States) ✋</p>
        <p>
          For Pandora (@pandoramusic), there is bound to be a piece of music for
          each emoji. At least this is what the American music streaming giant
          wanted to prove with its campaign #SoundsLike.
        </p>
        <p>
          {" "}
          👉 <a href="#">design.com.br/design</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#web</a>{" "}
          <a href="#">#reactjs</a> <a href="#">#dev</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feddback</strong>

        <textarea placeholder="Dexe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
