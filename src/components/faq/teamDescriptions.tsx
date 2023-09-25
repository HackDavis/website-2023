const teamDescriptions = [
  {
    team: 'Technical',
    description: (
      <>
        Are you interested in web development with a desire to learn and
        collaborate with a team of developers? If you have a foundation in
        HTML/CSS, JavaScript, and/or React.js and are eager to expand your skill
        set, join the Technical team! As a Technical Director, you will get the
        chance to collaborate with a team of developers to create and maintain
        the website and web applications, participate in code review sessions,
        and offer creative solutions.
        <br />
        <br />
        <strong>Qualifications:</strong>
        <br />
        Basic knowledge of HTML, CSS, and JavaScript.
        <br />
        Familiarity with React.js is a plus.
        <br />
        Strong desire to learn and grow in the field of web development.
        <br />
        Excellent problem-solving skills and attention to detail.
        <br />
        Ability to work well in a team and take constructive feedback
        positively.
        <br />
        Passion for technology and a proactive approach to keeping up with
        industry trends.
        <br />
        <br />
        <strong>Why Join Us:</strong>
        <br />
        Opportunity to work on diverse and exciting web development projects.
        <br />
        Gain hands-on experience and improve your technical skills.
        <br />
        Collaborate with a team of motivated developers.
        <br />
        Add impressive projects to your resume.
        <br />
        Create valuable connections in the tech industry.
        <br />
        Personal and professional growth in a student-run organization.
      </>
    ),
  },
  {
    team: 'Operations',
    description: (
      <>
        As an Operations Director, you will play a crucial role in ensuring the
        smooth execution of our initiatives. Your quick decision-making,
        organization, and responsibility will shine as you tackle challenges
        head-on. You&apos;ll be a key communicator and leader, working closely
        with the team and being ready to learn and develop organizational skills
        as you contribute to the success of one of the biggest hackathons in
        California.
        <br />
        <br />
        <strong>Qualifications:</strong>
        <br />
        Strong organizational skills with a passion for attention to detail.
        <br />
        Quick decision-making abilities, particularly in high-pressure
        situations.
        <br />
        A proactive and responsible approach to tackling challenges with
        enthusiasm and a willingness to learn and grow.
        <br />
        Thrive in a team setting, fostering a spirit of collaboration and mutual
        support.
        <br />
        Excellent communication skills.
        <br />A passion for learning and developing organizational and
        leadership skills.
      </>
    ),
  },
  {
    team: 'Marketing',
    description: (
      <>
        As a Marketing Director, you will be right at the heart of our marketing
        efforts, leveraging your creative thinking, organization,
        responsibility, and time management skills to help us engage our
        audience and promote our initiatives effectively. Collaboration with
        fellow team members and other departments is a key aspect of this role.
        <br />
        <br />
        {/* <strong>Responsibilities</strong>
            <ul>
                <li>Creative Thinking: Bring fresh and innovative ideas to our marketing campaigns, creating content that captivates and resonates with our audience.</li>
                <li>Organization: Assist in maintaining a well-organized marketing calendar, ensuring that campaigns and posts are delivered on time.</li>
                <li>Time Management: Juggle multiple tasks and deadlines efficiently, keeping marketing initiatives on track.</li>
                <li>Social Media Management: Manage and curate content for our social media platforms, creating engaging posts and fostering audience interaction.</li>
                <li>Collaboration: Collaborate with other team members and departments within the organization to align marketing efforts and achieve our collective goals.</li>
            </ul>
            <br /> */}
        <strong>Qualifications:</strong>
        <br />
        Enthusiasm for marketing and a strong desire to learn and grow in the
        field.
        <br />
        Creative mindset with the ability to think strategically.
        <br />
        Strong organizational skills and a high level of responsibility.
        <br />
        Effective time management abilities.
        <br />
        Basic understanding of social media platforms and their dynamics.
        <br />
        <br />
        <strong>Bonus Skills:</strong>
        <br />
        Prior experience in social media advertising is a plus.
        <br />
        Photography skills are a bonus, to generate better quality content for
        all events including the Day of Event hackathon
      </>
    ),
  },
  {
    team: 'Sponsorship',
    description: (
      <>
        As a Sponsorship Director, you will take the lead in securing vital
        sponsorships, relying on your confidence and quick thinking to engage
        potential partners. Your knack for negotiation, proactive approach, and
        talent for relationship building will be instrumental in fueling our
        initiatives.
        <br />
        <br />
        <strong>Qualifications:</strong>
        <br />
        Confidence and an ability to think on your feet in negotiations.
        <br />A natural talent for building and maintaining relationships.
        <br />
        Proactive mindset, always on the lookout for new sponsorship
        opportunities.
        <br />
        Strong organizational skills and the ability to manage multiple
        sponsorship commitments efficiently.
        <br />A genuine desire to learn and adapt, exploring new outreach and
        networking strategies.
      </>
    ),
  },
  {
    team: 'Finance',
    description: (
      <>
        As a Finance Director, you will play a vital role in managing our
        finances, ensuring the sustainability of our initiatives. Your passion
        and interest in budgeting, financial planning, and fundraising, combined
        with your outstanding communication skills, will drive our financial
        success. Your can-do attitude will be an invaluable asset as you
        contribute to HackDavis&apos; growth.
        <br />
        <br />
        <strong>Qualifications:</strong>
        <br />
        Strong financial acumen with an interest in budgeting and financial
        planning.
        <br />
        Good understanding of cash flow management and financial forecasting.
        <br />
        Fundraising experience or a willingness to learn and engage with donors
        and sponsors effectively.
        <br />
        Exceptional communication skills, both written and verbal.
        <br />A can-do attitude, with the ability to adapt and excel in a
        fast-paced environment.
      </>
    ),
  },
  {
    team: 'External',
    description: (
      <>
        As our External Affairs Director, you&apos;ll be the representative of
        HackDavis to external organizations, showcasing your organizational
        skills and enthusiastic demeanor. Your attention to detail,
        communication skills, and talent for relationship building will play a
        vital role in coordinating the workshops and events.
        <br />
        <br />
        <strong>Qualifications:</strong>
        <br />
        Spearhead the planning and execution of external events, demonstrating
        your organizational skills and attention to detail.
        <br />
        A proactive and personable demeanor, radiating energy and enthusiasm.
        <br />
        Strong communication skills, both written and verbal.
        <br />
        Confidence in connecting with diverse groups and individuals.
        <br />
        Initiative to learn and develop organizational and communication skills.
        <br />
        Outreach to clubs on-campus, students and alumni, and off-campus
        industry leaders; being able to network and foster meaningful
        connections
        <br />
        Familiarity with HackDavis or hackathons is preferred but not mandatory.
      </>
    ),
  },
  {
    team: 'Design',
    description: (
      <>
        Are you a creative, innovative, and proactive designer with a passion
        for human-centered design? Join the Design team and help us create
        brand-consistent, minimal, and aesthetically pleasing designs that
        captivate and excite our audience. Your creative talent will play a
        pivotal role in shaping the future of HackDavis. We are looking for
        talented individuals to join our design team in various roles:
        <br />
        <br />
        <strong>Brand Designer:</strong>
        <br />
        Craft the brand identity for the Hackathon season.
        <br />
        Storytelling and experimental design.
        <br />
        Proficiency in illustration using Figma and Adobe Illustrator.
        <br />
        <br />
        <strong>Product Designer:</strong>
        <br />
        Design products that aim to delight and leave an impression, including
        apparel, stickers, and branded items.
        <br />
        Detail-oriented with a focus on product specs.
        <br />
        Conduct market research to inform design decisions.
        <br />
        <br />
        <strong>Content Designer:</strong>
        <br />
        Create eye-catching, compelling content for social media and printed
        flyers.
        <br />
        Deep understanding of the audience.
        <br />
        Attention to detail to ensure engaging visuals.
        <br />
        <br />
        <strong>UI Designer:</strong>
        <br />
        Design beautiful and intuitive web experiences that bring joy to users.
        <br />
        Focus on responsive design and intuitive user experiences.
        <br />
        Proficiency in wireframing and creating delightful web interfaces.
      </>
    ),
  },
];

export default teamDescriptions;
