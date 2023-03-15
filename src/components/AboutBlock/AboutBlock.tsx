import styles from './styles.module.scss';

export function AboutBlock() {
    return (
        <section className={styles.AboutBlock} id="About">
            <h2 className={styles.aboutHeading}>About me</h2>
            <div className={styles.aboutText}>
                <p>Hi! My name is Ilya. I`m a Junior Frontend Developer.</p>
                <div className={styles.aboutTextBlock}>
                    <p>
                        I`ve started my journey in 2020, when I entered university.
                        I studied there almost 2 years and after that realize that,
                        is not what I looking for. So I decided to go by my own.
                    </p>
                    <p>
                        I started learning HTML, CSS and JS. After few weeks I
                        found out about RSSchool and next year I worked hard and
                        learned a lot. All this time I`ve been enjoying the learning
                        progress and most of all from what I am doing.
                    </p>
                </div>
                <p>
                    I have experience with developing client side of application,
                    working with REST API, creating SPAs using JS, ReactJS +
                    TypeScript. I`m very purposeful person, like to
                    studying(especially self-studying), like to work with other
                    people. I`m ready for new knowledge, connections and able to
                    adapt to the changes!
                </p>
                <p>
                    Oh, and I also love coding <span>:)</span>
                </p>
            </div>
        </section>
    );
}
