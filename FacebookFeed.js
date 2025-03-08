// components/FacebookFeed.js
"use client";
import { useEffect } from 'react';
import styles from '@/stylesheets/linkpost.module.css';

const FacebookFeed = () => {
  useEffect(() => {
    // Load Facebook SDK script dynamically
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v22.0'
      });
    };

    (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v22.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className={`${styles.container} flex flex-col items-center justify-center`}>
      <h2 className="text-3xl font-bold mb-12 text-center text-black">Latest Facebook Posts</h2>
      <div className={styles.postsWrapper}>
        <div 
          className="fb-page" 
          data-href="https://www.facebook.com/rmitshinsei" 
          data-tabs="timeline"
          data-width="500" 
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
          style={{ width: '100%', minHeight: '600px' }}
        >
          <blockquote 
            cite="https://www.facebook.com/rmitshinsei" 
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/rmitshinsei">
              RMIT SGS Shinsei Kendo Club
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default FacebookFeed;