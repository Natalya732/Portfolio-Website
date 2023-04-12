import React from "react";

import "./style.scss";

import Section from "../shared/Section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";

export default function Blogs() {
  return (
    <Section id="blogs" title="Blogs And Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="Langston Hughes"
          date="2023-1-3"
          image={Blog1}
          title="Dreams"
          description="Hold fast to dreams
For if dreams die
Life is a broken-winged bird
That cannot fly.
Hold fast to dreams
For when dreams go
Life is a barren field
Frozen with snow"
        />
        <BlogCard
          user="DOST MOHAMMAD"
          date="1987-11-31"
          image={Blog2}
          title="Do Not Stand At My Grave And Weep"
          description="My affection is as unadulterated as nectar,
crafted from handpicked blossoms.
A collaborative effort of bees,
alleviating the pains of my existence:
Entombing remnants of bygone
blooms with the aroma of the present,
Interlacing bonds with verbal strands."
        />
        <BlogCard
          user="BHULA"
          date="2002-2-6"
          image={Blog3}
          title="The Black Knight"
          description="Amidst the shadows of the night,
Silent warriors clad in black,
On a mission to make things right,
They embark on a noble track.

With steely resolve and sharpened swords,
They move with grace and perfect poise,
Protecting the weak, defending the lords,
Their strength and courage never recoils."
        />
      </div>
    </Section>
  );
}
