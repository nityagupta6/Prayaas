const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
  story_id: String,
  title: String,
  content: String,
  img_url: String,
});

const defaultStories = [
  {
    story_id: "1",
    title: "Swati’s treatment",
    content: "Swati Maurya, a student of Prayaas, was suffering from acute anaemia and was admitted in Swaroop Rani Hospital, Allahabad for around 9 days. Besides having other complications, her haemoglobin percentage had dropped down to as low as 5.2%. Her family was not in a position to deal with the situation financially. Prayaas helped the family by providing monetary support and blood units, owing to which the girl was able to recover and got discharged. Swati is one of the best students of Prayaas now and has continued to excel in her examinations.",
    img_url: "https://example.com/story1.jpg",
  },
  {
    story_id: "2",
    title: "Admission of Aanchal",
    content: "Aanchal, one of the brightest minds currently studying in Prayaas were granted admission in Vishnu Bhagwan Public School to continue their studies in a renowned English medium school in Prayagraj. Despite having such good academic performance, she was not able to excel because of her poor economic backgrounds. Team Prayaas arranged for their admissions and is currently bearing their educational expenses.",
    img_url: "https://example.com/story2.jpg",
  },
  {
    story_id: "3",
    title: "Admission of Swati",
    content: "Swati, one of the brightest minds currently studying in Prayaas were granted admission in Vishnu Bhagwan Public School to continue their studies in a renowned English medium school in Prayagraj. Despite having such good academic performance, she was not able to excel because of her poor economic backgrounds. Team Prayaas arranged for their admissions and is currently bearing their educational expenses.",
    img_url: "https://example.com/story3.jpg",
  },
  {
    story_id: "4",
    title: "Admission of Shilpa Diwakar",
    content: "Shilpa Diwakar, one of the brightest minds currently studying in Prayaas were granted admission in Vishnu Bhagwan Public School to continue their studies in a renowned English medium school in Prayagraj. Despite having such good academic performance, she was not able to excel because of her poor economic backgrounds. Team Prayaas arranged for their admissions and is currently bearing their educational expenses.",
    img_url: "https://example.com/story4.jpg",
  },
];

const Story = mongoose.model("Story", storySchema);

async function insertDefaultStories() {
  try {
    const count = await Story.countDocuments();
    if (count === 0) {
      await Story.insertMany(defaultStories);
      console.log("Default stories inserted.");
    } else {
      console.log("Stories already exist in the database.");
    }
  } catch (error) {
    console.error("Error inserting default stories:", error);
  }
}

mongoose.connection.once("open", () => {
  console.log("MongoDb connection ready");
  insertDefaultStories();
});

module.exports = Story;
