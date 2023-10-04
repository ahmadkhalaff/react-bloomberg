import React from "react";
import zeeker from "../img/zeeker.png";
import threads from "../img/threads.png";
import study from "../img/study.png";
import newyork from "../img/newyork.png";

const InsideContainer = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="sidebar_left">
          <div className="latest">
            <h3>Latest</h3>
            <div className="article_preview">
              <div className="l_heading">
                <a href="/" className="category">
                  Economics
                </a>
                <div className="time_ago">2h ago</div>
              </div>
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet coetur adipisicing elit.
              </a>
            </div>
            <div className="article_preview">
              <div className="l_heading">
                <a href="/" className="category">
                  Markets
                </a>
                <div className="time_ago">3h ago</div>
              </div>
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
            </div>
            <div className="article_preview">
              <div className="l_heading">
                <a href="/" className="category">
                  Tech
                </a>
                <div className="time_ago">4h ago</div>
              </div>
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
            </div>
          </div>
          <div className="most_read">
            <h3>Most Read</h3>
            <div className="article_preview">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet coetur adipisicing elit.
              </a>
              <div className="time_ago">2h ago</div>
            </div>
            <div className="article_preview">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <div className="time_ago">3h ago</div>
            </div>
            <div className="article_preview">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <div className="time_ago">4h ago</div>
            </div>
          </div>
          <div className="ad">
            <a href="/">
              <img src={study} alt="" />
            </a>
          </div>
          <div className="newsletter">
            <h6>Get our daily newsletter</h6>
            <p>
              Sign up now to get our daily newsletter and stay up-to-date with
              the latest news, features, and insights from Bloomberg.
            </p>
            <div className="submit_mail">
              <input type="email" placeholder="Your email address" />
              <input type="button" value="Subscribe" />
            </div>
            <span>
              By submitting my information, I agree to the
              <a href="/">Privacy Policy</a> and
              <a href="/">Terms of Service</a>.
            </span>
            <div className="terms">
              <input type="checkbox" id="terms_check" />
              <label for="terms_check">
                I agree to receive emails from Bloomberg and its affiliates,
                advertising partners, and sponsors.
              </label>
            </div>
          </div>
        </div>

        <div className="inner_articles">
          <article className="article mg_1">
            <a href="/">
              <img src={newyork} alt="" />
            </a>
            <div className="article_content">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <div className="time_ago">2h ago</div>
            </div>
          </article>

          <article className="inner_articles_middle">
            <a href="/" className="article_name">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <a href="/" className="article_name">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <a href="/" className="article_name">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <a href="/" className="article_name">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
          </article>

          <article className="inner_articles_down">
            <div className="article">
              <a href="/">
                <img src={zeeker} alt="" />
              </a>
              <div className="article_content">
                <a href="/" className="article_name">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </a>
                <div className="time_ago">2h ago</div>
              </div>
            </div>
            <div className="article">
              <a href="/">
                <img src={threads} alt="" />
              </a>
              <div className="article_content">
                <a href="/" className="article_name">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </a>
                <div className="time_ago">3h ago</div>
              </div>
            </div>
            <div className="article">
              <a href="/">
                <img src={study} alt="" />
              </a>
              <div className="article_content">
                <a href="/" className="article_name">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </a>
                <div className="time_ago">4h ago</div>
              </div>
            </div>
          </article>
        </div>

        <div className="sidebar_right">
          <div className="opinion">
            <h3>Opinion</h3>
            <div className="article_preview">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <div className="time_ago">2h ago</div>
            </div>
            <div className="article_preview">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <div className="time_ago">3h ago</div>
            </div>
            <div className="article_preview">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <div className="time_ago">4h ago</div>
            </div>
            <div className="article_preview">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <div className="time_ago">5h ago</div>
            </div>
            <div className="article_preview">
              <a href="/" className="article_name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
              <div classNameName="time_ago">6h ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideContainer;
