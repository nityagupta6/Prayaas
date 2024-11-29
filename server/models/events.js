const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  event_id: String,
  title: String,
  content: String,
  img_url: String,
});

const Event = mongoose.model("Event", eventSchema);

const defaultEvents = [
  {
    event_id: "1",
    title: "PAD BANK",
    content: "PadBank is an initiative started in the year 2019, wherein girls are educated about maintaining hygiene during menstrual cycles and free sanitary pads are distributed on a monthly basis. There have been 8 successful editions of PadBank and a tremendous increase in the awareness of menstruation and s...",
    img_url: "../img/padbank.png",
  },
  {
    event_id: "2",
    title: "MEAL DISTRIBUTION",
    content: "On 30th April, Team Prayaas welcomed the students of Prayaas with an evening meal for over 200+ children. We also distributed stationery items like pens and writing supplies. This was an overwhelming day for us which would not have been possible without the immense support of our faculties an...",
    img_url: "../img/mealD.png",
  },
  {
    event_id: "3",
    title: "HEALTH CAMPS",
    content: "Health camps are organized timely by Prayaas in collaboration with the health centre of IIITA. Free checkup facility is provided by the doctors of the health centre, where more than 300 children are examined and treated. This is usually followed by lunch arrangement for the kids.",
    img_url: "../img/healthcamp.png",
  },
  {
    event_id: "4",
    title: "CAMPUS VISITS",
    content: "Remember the times when we were taken out on one-day-trips by the school? Some of the best school memories indeed. A campus visit is something very similar to those one-day-trips. The kids are taken inside the campus of IIIT Allahabad, where they enjoy fun activities all day. A movie in the ad...",
    img_url: "../img/campusvisit.png",
  },
  {
    event_id: "5",
    title: "WORKSHOPS",
    content: "In addition to knowledge for the growth of mind, a child has to have moral values to be able to grow as a person. Besides, there are some social topics which should be covered in the class by the mentors practically. So in addition to regular teaching, regular workshops are held in the classr...",
    img_url: "../img/workshops.png",
  },
];


async function insertDefaultEvents() {
  try {
    const count = await Event.countDocuments();
    if (count === 0) {
      await Event.insertMany(defaultEvents);
      console.log("Default events inserted.");
    } else {
      console.log("Events already exist in the database.");
    }
  } catch (error) {
    console.error("Error inserting default events:", error);
  }
}

mongoose.connection.once("open", () => {
  console.log("MongoDb connection ready");
  insertDefaultEvents();
});

module.exports = Event;
