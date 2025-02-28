import React from 'react';
import styled from 'styled-components';
import AboutImage from '../assets/AboutUsBanner.png'

const AboutUsWrapper = styled.section`
  background-color: #f4f4f4;
  padding: 60px 20px;
  text-align: center;
`;

const AboutUsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const AboutUsTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const AboutUsDescription = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
`;

const AboutUsImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  border-radius: 10px;
`;

const AboutUsMission = styled.div`
  background-color: #ff5622e0;
  color: white;
  padding: 40px 20px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const AboutUsMissionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const AboutUsMissionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
`;

const TeamSection = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const TeamTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const TeamMembers = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;

const TeamMember = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const TeamMemberName = styled.h3`
  font-size: 20px;
  color: #333;
`;

const TeamMemberRole = styled.p`
  font-size: 16px;
  color: #777;
`;

const AboutUsCTA = styled.div`
  margin-top: 40px;
  background-color: #f39c12;
  color: white;
  padding: 40px 20px;
  border-radius: 10px;
  text-align: center;
`;

const AboutUsCTAButton = styled.a`
  background-color: white;
  color: #f39c12;
  padding: 15px 30px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    background-color: #f3b31c;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <AboutUsContainer>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsDescription>
          Welcome to our food website! We are passionate about bringing delicious and fresh meals to your table.
          Our team is dedicated to providing you with the best food experience, from sourcing high-quality ingredients
          to offering quick and reliable delivery services. Whether you're looking for a hearty meal or a light snack,
          we've got you covered!
        </AboutUsDescription>
        <AboutUsImage src={AboutImage} alt="Food Image" />
        
        <AboutUsMission>
          <AboutUsMissionTitle>Our Mission</AboutUsMissionTitle>
          <AboutUsMissionText>
            Our mission is to create memorable food experiences for our customers by providing healthy, fresh,
            and locally sourced meals. We aim to support our community by partnering with local farms and food
            producers, ensuring that every meal is made with the highest quality ingredients. We are committed to
            sustainability, excellent customer service, and bringing people together through food.
          </AboutUsMissionText>
        </AboutUsMission>

        <TeamSection>
          <TeamTitle>Meet Our Team</TeamTitle>
          <TeamMembers>
            <TeamMember>
              <TeamMemberImage src="https://via.placeholder.com/150" alt="Team Member 1" />
              <TeamMemberName>John Doe</TeamMemberName>
              <TeamMemberRole>Founder & CEO</TeamMemberRole>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="https://via.placeholder.com/150" alt="Team Member 2" />
              <TeamMemberName>Jane Smith</TeamMemberName>
              <TeamMemberRole>Head Chef</TeamMemberRole>
            </TeamMember>
            <TeamMember>
              <TeamMemberImage src="https://via.placeholder.com/150" alt="Team Member 3" />
              <TeamMemberName>Mark Lee</TeamMemberName>
              <TeamMemberRole>Operations Manager</TeamMemberRole>
            </TeamMember>
          </TeamMembers>
        </TeamSection>

        <AboutUsCTA>
          <h2>Ready to Explore Our Menu?</h2>
          <p>Start your culinary journey with us and taste the finest dishes we offer!</p>
          <AboutUsCTAButton href="/menu">Explore Our Menu</AboutUsCTAButton>
        </AboutUsCTA>
      </AboutUsContainer>
    </AboutUsWrapper>
  );
};

export default AboutUs;
