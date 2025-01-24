const translations = {
  en: {
    title: "Survey Form",
    q1: "1. Have you received possession of the shop?",
    q1o1: "Yes, received",
    q1o2: "Not received yet",
    sq1: "1.1 In how many days will you receive possession?",
    sq1o1: "2-4 days",
    sq1o2: "A week",
    sq1o3: "A month",
    sq2: "1.2 When should we call you again?",
    q2: "2. Is the shop completely empty?",
    q2o1: "Yes, it's empty",
    q2o2: "No, it's not empty yet",
    shopPhoto: "Send a complete photo of the shop",
    shopVideo: "Send a video of the shop",
    q3: "3. How many feet is the shop shutter?",
    q3o1: "6 ft",
    q3o2: "8 ft",
    q3o3: "12 ft",
    q3Input: "Other (specify in feet)",
    q4: "4. Is there electrical supply in the shop?",
    q4o1: "Yes, there is",
    q4o2: "No, there isn't",
    lightPhoto: "Send a photo of the shop with the lights on",
    mcbBox: "Send a photo of the MCB Box",
    meterBox: "Send a photo of the Meter Box",
    sq7: "4.1 Who will provide the electrical supply?",
    sq7o1: "Shop owner",
    sq7o2: "Franchisee holder",
    sq7o3: "Other",
    q5: "5. Is there drainage connectivity in the shop?",
    q5o1: "Yes, there is",
    q5o2: "No, there isn't",
    drainagePhoto: "Send a photo showing the working drainage",
    sq8: "5.1 Who will provide the drainage connectivity?",
    sq8o1: "Shop owner",
    sq8o2: "Franchisee holder",
    sq8o3: "Other",
    q6: "6. Is there water connectivity in the shop?",
    q6o1: "Yes, there is",
    q6o2: "No, there isn't",
    waterVideo: "Send a video showing running water from the tap",
    sq9: "6.1 Who will provide the water connectivity?",
    sq9o1: "Shop owner",
    sq9o2: "Franchisee holder",
    sq9o3: "Other",
    q7: "7. Is there Earthing connectivity in the shop?",
    q7o1: "Yes, there is",
    q7o2: "No, there isn't",
    earthingPhoto: "Send a photo",
    sq10: "7.1 Who will provide the Earthing connectivity?",
    sq10o1: "Shop owner",
    sq10o2: "Franchisee holder",
    sq10o3: "Other",
    submit: "Submit",
    back: "Back",
    langSwitch: "मराठी",
  },
  mr: {
    title: "सर्वेक्षण फॉर्म",
    q1: "१. शॉप चा ताबा आपल्याकडे आला आहे का, आपल्याला मिळाला आहे का?",
    q1o1: "हो भेटला आहे",
    q1o2: "नाही भेटला अजून",
    sq1: "१.१ किती दिवसामध्ये ताबा भेटणार आहे?",
    sq1o1: "2-4 दिवस",
    sq1o2: "आठवडा",
    sq1o3: "महिना",
    sq2: "१.२ पुन्हा फोन किती तारखेला करू?",
    q2: "२. शॉप पूर्णपणे मोकळे आहे का?",
    q2o1: "हो मोकळे आहे",
    q2o2: "नाही खाली झाले अजून",
    shopPhoto: "शॉप चा संपूर्ण फोटो पाठवा",
    shopVideo: "शॉप चा video पाठवा",
    q3: "३. शॉप चा shuttar किती फूट आहे?",
    q3o1: "6 ft",
    q3o2: "8 ft",
    q3o3: "12 ft",
    q3Input: "अन्य (फूट मध्ये नमूद करा)",
    q4: "४. शॉप मध्ये electrical supply आहे का?",
    q4o1: "हो आहे",
    q4o2: "नाही आहे",
    lightPhoto: "शॉप मध्ये light चालू असल्याचा फोटो पाठवा",
    mcbBox: "MCB Box चा फोटो पाठवा",
    meterBox: "मीटर box चा फोटो पाठवा",
    sq7: "४.१ कोण घेऊन देणार आहे?",
    sq7o1: "शॉप owner",
    sq7o2: "frenchisee धारक",
    sq7o3: "इतर",
    q5: "५. शॉप मध्ये drinage कॅन्नेक्टी आहे का?",
    q5o1: "हो आहे",
    q5o2: "नाही आहे",
    drainagePhoto: "शॉप मध्ये drinage चालू असल्याचा फोटो पाठवा",
    sq8: "५.१ कोण घेऊन देणार आहे?",
    sq8o1: "शॉप owner",
    sq8o2: "frenchisee धारक",
    sq8o3: "इतर",
    q6: "६. शॉप मध्ये water कॅन्नेक्टी आहे का?",
    q6o1: "हो आहे",
    q6o2: "नाही आहे",
    waterVideo: "शॉप मध्ये नळाला पाणी चालू असल्याचा video पाठवा",
    sq9: "६.१ कोण घेऊन देणार आहे?",
    sq9o1: "शॉप owner",
    sq9o2: "frenchisee धारक",
    sq9o3: "इतर",
    q7: "७. शॉप मध्ये Earthing कॅन्नेक्टी आहे का?",
    q7o1: "हो आहे",
    q7o2: "नाही आहे",
    earthingPhoto: "फोटो पाठवा",
    sq10: "७.१ कोण घेऊन देणार आहे?",
    sq10o1: "शॉप owner",
    sq10o2: "frenchisee धारक",
    sq10o3: "इतर",
    submit: "सबमिट करा",
    back: "मागे",
    langSwitch: "English",
  },
}

let currentLang = "mr"
let currentQuestionIndex = 1

function updateLanguage() {
  const elements = document.querySelectorAll('[id$="Label"], [id^="sq"], [id^="q"]')
  elements.forEach((el) => {
    const key = el.id.replace("Label", "").replace("o", "o")
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key]
    }
  })

  document.getElementById("formTitle").textContent = translations[currentLang].title
  document.getElementById("submitBtn").textContent = translations[currentLang].submit
  document.getElementById("backBtn").textContent = translations[currentLang].back
  document.getElementById("langSwitch").textContent = translations[currentLang].langSwitch

  document.querySelectorAll("[lang]").forEach((el) => {
    el.lang = currentLang === "mr" ? "mr" : "en"
  })
}

document.getElementById("langSwitch").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "mr" : "en"
  updateLanguage()
})

function showQuestion(index) {
  document.querySelectorAll(".question").forEach((q) => q.classList.add("hidden"))
  document.getElementById(`question${index}`).classList.remove("hidden")
  currentQuestionIndex = index
  document.getElementById("backBtn").style.display = index === 1 ? "none" : "block"
}

function showSubQuestions(questionId, answer) {
  const yesSubQuestions = document.getElementById(`subQuestions${questionId}Yes`)
  const noSubQuestions = document.getElementById(`subQuestions${questionId}No`)

  if (yesSubQuestions) yesSubQuestions.classList.add("hidden")
  if (noSubQuestions) noSubQuestions.classList.add("hidden")

  if (answer === "yes" && yesSubQuestions) {
    yesSubQuestions.classList.remove("hidden")
  } else if (answer === "no" && noSubQuestions) {
    noSubQuestions.classList.remove("hidden")
  }
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const questionId = e.target.name.replace("mainQuestion", "")
    if (questionId !== "1") {
      showSubQuestions(questionId, e.target.value)
    }
  })
})

document.querySelectorAll('input[name="mainQuestion1"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    if (e.target.value === "no") {
      document.getElementById("subQuestions1").classList.remove("hidden")
    } else {
      document.getElementById("subQuestions1").classList.add("hidden")
    }
  })
})

document.getElementById("backBtn").addEventListener("click", () => {
  if (currentQuestionIndex > 1) {
    showQuestion(currentQuestionIndex - 1)
  }
})

document.getElementById("surveyForm").addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const mainQuestionAnswer = formData.get(`mainQuestion${currentQuestionIndex}`)

  if (currentQuestionIndex === 1) {
    if (mainQuestionAnswer === "yes") {
      showQuestion(2)
    } else if (mainQuestionAnswer === "no") {
      const possessionTime = formData.get("possessionTime")
      const callbackDate = formData.get("callbackDate")
      if (possessionTime && callbackDate) {
        displayFormData(formData)
      } else {
        alert("Please answer all sub-questions before submitting.")
      }
    }
  } else if (currentQuestionIndex < 7) {
    if (mainQuestionAnswer === "no" && [4, 5, 6, 7].includes(currentQuestionIndex)) {
      const provider = formData.get(`${getProviderField(currentQuestionIndex)}Provider`)
      if (provider) {
        displayFormData(formData)
      } else {
        alert("Please select who will provide the connection.")
      }
    } else {
      showQuestion(currentQuestionIndex + 1)
    }
  } else {
    displayFormData(formData)
  }
})

function getProviderField(questionIndex) {
  const providerFields = {
    4: "electricalSupply",
    5: "drainage",
    6: "water",
    7: "earthing",
  }
  return providerFields[questionIndex]
}

function displayFormData(formData) {
  const formDataObj = Object.fromEntries(formData)
  console.log(formDataObj)

  let tableHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: orange;">
        <h2 style="text-align: center;">Survey Results</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #f2f2f2;">
            <tr>
                <th style="border: 1px solid #ddd; padding: 10px; background-color: #f2f2f2; text-align: left;">Question</th>
                <th style="border: 1px solid #ddd; padding: 10px; background-color: #f2f2f2; text-align: left;">Answer</th>
            </tr>
  `

  for (const [key, value] of Object.entries(formDataObj)) {
    if (value && !(value instanceof File) && value !== "no" && value !== "yes") {
      const questionText = getQuestionText(key)
      if (questionText !== key) {
        // Only display if we have a translation for the question
        tableHTML += `
          <tr>
              <td style="border: 1px solid #fff; padding: 10px;">${questionText}</td>
              <td style="border: 1px solid #fff; padding: 10px;">${value}</td>
          </tr>
        `
      }
    }
  }

  tableHTML += `
        </table>
    </div>
  `

  document.body.innerHTML = tableHTML
}

function getQuestionText(key) {
  const questionTexts = {
    mainQuestion1: translations[currentLang].q1,
    possessionTime: translations[currentLang].sq1,
    callbackDate: translations[currentLang].sq2,
    mainQuestion2: translations[currentLang].q2,
    mainQuestion3: translations[currentLang].q3,
    shutterSizeOther: translations[currentLang].q3Input,
    mainQuestion4: translations[currentLang].q4,
    electricalSupplyProvider: translations[currentLang].sq7,
    mainQuestion5: translations[currentLang].q5,
    drainageProvider: translations[currentLang].sq8,
    mainQuestion6: translations[currentLang].q6,
    waterProvider: translations[currentLang].sq9,
    mainQuestion7: translations[currentLang].q7,
    earthingProvider: translations[currentLang].sq10,
  }
  return questionTexts[key] || key
}

// Initialize the form
showQuestion(1)
updateLanguage()

