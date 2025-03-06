import React from "react";
import styles from "@/stylesheets/linkpost.module.css"; // Import CSS module

const facebookPosts = [
  {
    id: "post1",
    title: "🔥【𝗦𝗛𝗜𝗡𝗦𝗘𝗜 𝗕𝗢𝗔𝗥𝗗 𝗢𝗙 𝗧𝗥𝗔𝗜𝗡𝗜𝗡𝗚】🔥",
    imageUrl: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/481662805_122218861004231453_8034144119498913864_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF3I1mKqvV39FhLXlqncZ6ZbctwAQpyimpty3ABCnKKapwRyllDJC3Z--tXArEiVTCdj00Rhbj-hvpnQSty1c9Z&_nc_ohc=4ZhK6u-3MA8Q7kNvgG3tDxE&_nc_oc=AdjmSPUxWPMae_CvgSuwi1qLlXQ3dhzrd_o1x1LMvSXVngxWm4zMBr3ljPRtd1kYrBZjMZ1TCPRJMGLnsbeRM0bo&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A1aQC4hv1xbufjM1Jan8VHk&oh=00_AYC-heQvyRKdoCi2bmwh-s0DiTcXJNanOHm6h0uHpr4_jQ&oe=67CF72BB", // Replace with actual FB post image URL
    link: "https://www.facebook.com/share/p/19vEdK4vcT/", // Replace with actual FB post link
  },
  {
    id: "post2",
    title: "🦁𝗟𝗲𝗴𝗮𝗰𝘆 𝗼𝗳 𝘁𝗵𝗲 𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻 🦁",
    imageUrl: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/481662659_122218874522231453_7236078323201545040_n.png?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFXa7zN2vq9FQSP0rKgT2xWxW_GK4sQHc3Fb8YrixAdzQBu4qLDg-irmQZCeZp92kzV8zMx4XdcIaSZ5iUY0Q1T&_nc_ohc=wt7VWp1cPGIQ7kNvgH9kTFu&_nc_oc=AdjBTAtnbKZ7isZCi387ZCNZpGufNfU8Dx-tilId4lU6BASbwu0dmgkUzoFeYKVlM5C5ltvIRk9yTqht9YTIwpnH&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AzEZXJ7GTbaUJ9I3VVMAfK9&oh=00_AYBY-P-ZVoYEL9MFkBWgHrzTnPNGcC7Z3_n5SCXH4WxZfQ&oe=67CF775D",
    link: "https://www.facebook.com/share/1A2J9hBHpC/",
  },
  {
    id: "post3",
    title: "🔥【𝗦𝗛𝗜𝗡𝗦𝗘𝗜 𝗘𝗫𝗘𝗖𝗨𝗧𝗜𝗩𝗘 & 𝗠𝗔𝗡𝗔𝗚𝗘𝗠𝗘𝗡𝗧 𝗕𝗢𝗔𝗥𝗗 - 𝗚𝟭.𝟱】🔥",
    imageUrl: "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/481666815_122218602332231453_4028316082318931657_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF88TFgNIT6ZL1A4eN3StRs8SGyLzo60UnxIbIvOjrRSZnDE7wx_YzcBjabk96PwqE_PILnan0KKYSqKCxzN3wr&_nc_ohc=Q8pgXY_LuzEQ7kNvgEQYgAw&_nc_oc=AdgtrgmiVVXWzpfvTO1Ws4udRK7Sq4rbp0rGRbvxdbCc0fRLRfD9PGFnXQ74YYfO926WVirzty8GRIFCkXRE-xX7&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=AWhU05lZVfoQ1DR7D7L18yB&oh=00_AYARkpGALYRrzfdOyN-FFvQ2c5ZMdcnXgTjdU1AXKAlmZQ&oe=67CF712A",
    link: "https://www.facebook.com/share/p/15qxkg72Su/",
  },
];

const LinkPost = () => {
    return (
      <div className={`${styles.container} flex flex-col items-center justify-center`}>
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Latest Facebook Posts</h2>
        <div className="space-y-10 w-full flex flex-col items-center">
          {facebookPosts.map((post) => (
            <div key={post.id} className={styles.post}>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.postTitle}>
                {post.title}
              </a>
              <img src={post.imageUrl} alt={post.title} className={styles.postImage} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LinkPost;
