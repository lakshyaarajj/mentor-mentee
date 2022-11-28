const countMatchingSkills = async (menteeSkill) => {
    console.log(menteeSkill)
    const mentors = await (await fetch('https://sheetdb.io/api/v1/v8j8nzhchdhrs')).json()
    // const mentors = [
    //     {
    //         "Name": "Amit Verma",
    //         "Semester": "3rd",
    //         "Branch": "Computer Science",
    //         "Roll" : "10088",
    //         "Linkedin URL" : "https://www.linkedin.com/in/meamitverma/",
    //         "Skills": "Web Development"
    //     },
    //     {
    //         "Name": "Aishwary Verma",
    //         "Semester": "3rd",
    //         "Branch": "Computer Science",
    //         "Roll" : "1008123128",
    //         "Linkedin URL" : "https://www.linkedin.com/in/",
    //         "Skills": "Academic Guidance"
    //     },

    // ]
    
    var count = 1;
    for (var index = 0; index < mentors.length; index++) {
        var isMatching = mentors[index].Skills == menteeSkill;
        if (isMatching) {
            // create element
            var mentorObj = mentors[index]
            var mentor = document.createElement('div')
            mentor.className = 'mentor'
            var mentor_sno = document.createElement('div')
            mentor_sno.className = 'mentor-sno'
            var mentor_details = document.createElement('div')
            mentor_details.className = 'mentor-details'

            // mentor sno
            mentor_sno.innerHTML = count

            // mentor details
            var wrapper = document.createElement('div')
            wrapper.className = "mentor-wrapper"


            var name = document.createElement('div')
            name.className = "mentor-name"
            name.innerHTML = mentorObj.Name + " • " + `<span class="mentor-year">${mentorObj.Semester}</span>`
            wrapper.appendChild(name)

            var linkedin = document.createElement('div')
            linkedin.innerHTML = `<a href=${mentorObj["Linkedin URL"]} target="_" class="mentor-linkedin"><div class="linkedin-logo"></div></a>`
            wrapper.appendChild(linkedin)

            mentor_details.appendChild(wrapper)

            var mentor_roll = document.createElement('div')
            mentor_roll.className = "mentor-roll"
            mentor_roll.innerHTML = mentorObj.Roll
            mentor_details.appendChild(mentor_roll)

            var mentor_stats = document.createElement('div')
            mentor_stats.className = "mentor-stats"
            mentor_stats.innerHTML = `Branch <span class="mentor-skill">${mentorObj.Branch}</span>
            <br />
            Skill: <span class="mentor-skill">${mentorObj.Skills}</span>`
            mentor_details.appendChild(mentor_stats)


            mentor.appendChild(mentor_sno)
            mentor.appendChild(mentor_details)

            document.getElementById('mentor-list').appendChild(mentor)
            
            count++;
        }
            
    }
}

var skill = window.chosenSkill
// var skill = "Web Development"
countMatchingSkills(skill)