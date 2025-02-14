import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const therapistsData = [
  {
    name: "Dr. Priya Sharma",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    title: "Clinical Psychologist",
    specialties: [
      "Anxiety",
      "Depression",
      "Cultural Adjustment",
      "Family Therapy",
    ],
    approach: "CBT, Mindfulness, Traditional Indian Healing Practices",
    experience: "15 years",
    rating: 4.8,
    reviews: 145,
    nextAvailable: "Tomorrow",
    price: "$120-150",
    languages: ["English", "Hindi", "Punjabi"],
    formats: ["Video", "Phone", "In-person"],
    education: [
      "Ph.D. in Clinical Psychology, AIIMS Delhi",
      "M.Phil. in Clinical Psychology, NIMHANS Bangalore",
      "B.A. in Psychology, Delhi University",
    ],
    certifications: [
      "Licensed Clinical Psychologist - RCI",
      "Certified CBT Practitioner",
      "Advanced Training in Family Therapy",
    ],
    about:
      "Dr. Sharma combines Western psychological approaches with traditional Indian healing practices to provide culturally sensitive therapy. With 15 years of experience, she specializes in helping individuals navigate anxiety, depression, and cultural adjustment issues. Her integrated approach draws from both modern psychotherapy techniques and ancient wisdom traditions.",
    publications: [
      "Cultural Competency in Modern Psychotherapy (2023)",
      "Integrating Traditional Healing with CBT (2022)",
      "Mental Health in the South Asian Context (2021)",
    ],
  },
  {
    name: "Dr. Rajesh Patel",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
    title: "Psychiatrist & Psychotherapist",
    specialties: ["Depression", "Anxiety", "Trauma", "Cross-cultural Issues"],
    approach: "Integrative Therapy, Psychodynamic, Medication Management",
    experience: "18 years",
    rating: 4.9,
    reviews: 198,
    nextAvailable: "Next Week",
    price: "$140-170",
    languages: ["English", "Hindi", "Gujarati"],
    formats: ["Video", "In-person"],
    education: [
      "M.D. Psychiatry, AIIMS New Delhi",
      "DPM in Psychiatry, KEM Hospital Mumbai",
      "MBBS, Gujarat University",
    ],
    certifications: [
      "Board Certified Psychiatrist - MCI",
      "Advanced Psychotherapy Certification",
      "Certified in EMDR Therapy",
    ],
    about:
      "Dr. Patel is a highly experienced psychiatrist who combines medication management with psychotherapy. His approach integrates Western psychiatric methods with cultural sensitivity, making him particularly effective in treating South Asian clients. He specializes in complex cases requiring both therapeutic and medicinal interventions.",
    publications: [
      "Psychopharmacology in Cultural Context (2023)",
      "Depression Treatment: An Integrated Approach (2022)",
      "Cross-Cultural Psychiatry: Modern Perspectives (2021)",
    ],
  },
  {
    name: "Dr. Meera Krishnan",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
    title: "Counseling Psychologist",
    specialties: [
      "Relationship Issues",
      "Women's Mental Health",
      "Trauma",
      "Identity",
    ],
    approach:
      "Person-Centered Therapy, Feminist Therapy, Mindfulness-Based Approaches",
    experience: "12 years",
    rating: 4.7,
    reviews: 156,
    nextAvailable: "Today",
    price: "$110-140",
    languages: ["English", "Tamil", "Malayalam"],
    formats: ["Video", "Phone", "In-person"],
    education: [
      "Ph.D. in Counseling Psychology, University of Madras",
      "M.A. in Clinical Psychology, Stella Maris College",
      "B.Sc. in Psychology, Loyola College Chennai",
    ],
    certifications: [
      "Licensed Counseling Psychologist",
      "Certified Trauma Professional",
      "Women's Mental Health Specialist",
    ],
    about:
      "Dr. Krishnan specializes in empowering women through culturally informed therapy. Her approach combines feminist therapy principles with traditional Indian wisdom. She has extensive experience working with trauma, relationship issues, and cultural identity concerns. Her practice emphasizes creating a safe space for exploring personal growth and healing.",
    publications: [
      "Feminist Therapy in Indian Context (2023)",
      "Trauma Healing Through Cultural Lens (2022)",
      "Women's Mental Health in Modern India (2021)",
    ],
  },
  {
    name: "Dr. Arjun Malhotra",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
    title: "Child & Adolescent Psychologist",
    specialties: [
      "Child Psychology",
      "ADHD",
      "Learning Disabilities",
      "Behavioral Issues",
    ],
    approach: "Play Therapy, CBT for Children, Family Systems Therapy",
    experience: "14 years",
    rating: 4.9,
    reviews: 178,
    nextAvailable: "This Week",
    price: "$130-160",
    languages: ["English", "Hindi", "Bengali"],
    formats: ["Video", "In-person"],
    education: [
      "Ph.D. in Child Psychology, NIMHANS",
      "M.Phil. in Clinical Psychology, University of Delhi",
      "B.A. in Psychology, St. Xavier's College",
    ],
    certifications: [
      "Certified Child Psychologist",
      "Play Therapy Certification",
      "Special Education Specialist",
    ],
    about:
      "Dr. Malhotra is passionate about children's mental health and development. He specializes in working with children and adolescents, particularly in addressing developmental concerns, behavioral issues, and learning difficulties. His approach integrates play therapy with traditional psychological methods, making therapy engaging and effective for young clients.",
    publications: [
      "Play Therapy in Indian Schools (2023)",
      "Understanding ADHD in South Asian Children (2022)",
      "Modern Parenting: A Cultural Perspective (2021)",
    ],
  },
  {
    name: "Dr. Sarika Desai",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47",
    title: "Geriatric Mental Health Specialist",
    specialties: ["Elder Care", "Depression", "Anxiety", "Memory Issues"],
    approach:
      "Cognitive Stimulation Therapy, Reminiscence Therapy, Family-Centered Care",
    experience: "16 years",
    rating: 4.8,
    reviews: 134,
    nextAvailable: "Tomorrow",
    price: "$125-155",
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    formats: ["Video", "Phone", "In-person", "Home Visits"],
    education: [
      "Ph.D. in Clinical Psychology, Mumbai University",
      "M.A. in Gerontology, TISS Mumbai",
      "B.A. in Psychology, Fergusson College Pune",
    ],
    certifications: [
      "Certified Geriatric Mental Health Specialist",
      "Dementia Care Professional",
      "Family Therapy Certification",
    ],
    about:
      "Dr. Desai specializes in geriatric mental health, focusing on the unique psychological needs of older adults. She combines traditional Indian family values with modern therapeutic approaches to provide comprehensive care for elderly clients. Her expertise includes managing age-related cognitive decline, depression, and anxiety in older adults.",
    publications: [
      "Elderly Mental Health in Indian Families (2023)",
      "Cognitive Health in Aging Population (2022)",
      "Family-Centered Geriatric Care (2021)",
    ],
  },
  {
    name: "Dr. Vikram Reddy",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    title: "Addiction Specialist & Psychotherapist",
    specialties: [
      "Addiction Recovery",
      "Substance Abuse",
      "Behavioral Addictions",
      "Trauma",
    ],
    approach: "Motivational Interviewing, CBT, 12-Step Integration",
    experience: "13 years",
    rating: 4.7,
    reviews: 142,
    nextAvailable: "Next Week",
    price: "$135-165",
    languages: ["English", "Hindi", "Telugu"],
    formats: ["Video", "In-person"],
    education: [
      "M.D. Psychiatry, JIPMER Puducherry",
      "Advanced Training in Addiction Medicine, NIMHANS",
      "MBBS, Osmania Medical College",
    ],
    certifications: [
      "Certified Addiction Professional",
      "EMDR Practitioner",
      "Certified Group Therapy Leader",
    ],
    about:
      "Dr. Reddy specializes in addiction treatment, combining medical expertise with psychotherapy. His approach integrates traditional recovery methods with cultural sensitivity, particularly focusing on the unique challenges faced by South Asian communities. He has extensive experience in treating both substance and behavioral addictions.",
    publications: [
      "Addiction Treatment in South Asian Communities (2023)",
      "Cultural Aspects of Recovery (2022)",
      "Family Systems in Addiction Recovery (2021)",
    ],
  },
  {
    name: "Dr. Amrita Singh",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    title: "Sports Psychologist",
    specialties: [
      "Performance Enhancement",
      "Anxiety Management",
      "Injury Recovery",
      "Team Dynamics",
    ],
    approach:
      "Mindfulness-Based Performance Enhancement, CBT, Visualization Techniques",
    experience: "10 years",
    rating: 4.8,
    reviews: 165,
    nextAvailable: "This Week",
    price: "$145-175",
    languages: ["English", "Hindi", "Punjabi"],
    formats: ["Video", "In-person", "Field Sessions"],
    education: [
      "Ph.D. in Sports Psychology, Loughborough University UK",
      "M.Sc. in Sports Science, University of Delhi",
      "B.Sc. in Psychology, Panjab University",
    ],
    certifications: [
      "Certified Sports Psychologist",
      "Performance Enhancement Specialist",
      "Mental Game Coaching Professional",
    ],
    about:
      "Dr. Singh specializes in helping athletes achieve peak performance through mental conditioning. She combines Western sports psychology techniques with Eastern mindfulness practices to create comprehensive mental training programs. Her experience includes working with elite athletes and sports teams across various disciplines.",
    publications: [
      "Mental Training in Indian Sports (2023)",
      "Mindfulness for Athletic Performance (2022)",
      "Cultural Aspects of Sports Psychology (2021)",
    ],
  },
  {
    name: "Dr. Zara Rahman",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    title: "LGBTQ+ Affirmative Therapist",
    specialties: [
      "Gender Identity",
      "Sexual Orientation",
      "Family Acceptance",
      "Trauma",
    ],
    approach:
      "Affirmative Therapy, Narrative Therapy, Intersectional Framework",
    experience: "9 years",
    rating: 4.9,
    reviews: 147,
    nextAvailable: "Tomorrow",
    price: "$115-145",
    languages: ["English", "Hindi", "Urdu"],
    formats: ["Video", "Phone", "In-person"],
    education: [
      "Ph.D. in Clinical Psychology, JNU",
      "M.A. in Gender Studies, TISS",
      "B.A. in Psychology, Lady Shri Ram College",
    ],
    certifications: [
      "LGBTQ+ Affirmative Therapy Certified",
      "Trauma-Informed Care Specialist",
      "Narrative Therapy Practitioner",
    ],
    about:
      "Dr. Rahman specializes in providing affirming therapy for LGBTQ+ individuals, particularly within the South Asian context. She helps clients navigate identity, family acceptance, and cultural intersectionality. Her approach combines progressive therapeutic techniques with cultural sensitivity to create a safe space for exploration and growth.",
    publications: [
      "LGBTQ+ Mental Health in South Asia (2023)",
      "Family Acceptance in Conservative Societies (2022)",
      "Intersectional Approaches to Gender Therapy (2021)",
    ],
  },
  {
    name: "Dr. Karthik Venkatesh",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    title: "Occupational Mental Health Specialist",
    specialties: [
      "Work Stress",
      "Burnout",
      "Career Transitions",
      "Leadership Psychology",
    ],
    approach: "Solution-Focused Therapy, CBT, Organizational Psychology",
    experience: "11 years",
    rating: 4.7,
    reviews: 189,
    nextAvailable: "This Week",
    price: "$140-170",
    languages: ["English", "Tamil", "Kannada"],
    formats: ["Video", "Phone", "In-person", "Corporate Sessions"],
    education: [
      "Ph.D. in Organizational Psychology, IIT Madras",
      "MBA in HR, IIM Bangalore",
      "B.Tech in Computer Science, NIT Trichy",
    ],
    certifications: [
      "Certified Organizational Psychologist",
      "Executive Coach Certification",
      "Stress Management Specialist",
    ],
    about:
      "Dr. Venkatesh specializes in workplace mental health, combining his technical background with psychological expertise. He helps professionals navigate work-related stress, career transitions, and leadership challenges. His unique approach integrates corporate understanding with psychological principles to provide practical solutions for modern workplace issues.",
    publications: [
      "Mental Health in Indian Tech Industry (2023)",
      "Leadership Psychology in Asian Context (2022)",
      "Preventing Burnout in High-Stress Jobs (2021)",
    ],
  },
];

async function seedTherapists() {
  try {
    const createdTherapists = await Promise.all(
      therapistsData.map(async (therapist) => {
        return await prisma.therapist.create({
          data: therapist,
        });
      })
    );

    console.log(`Successfully created ${createdTherapists.length} therapists`);
    return createdTherapists;
  } catch (error) {
    console.error("Error seeding therapists:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seedTherapists()
  .then(() => console.log("Seeding completed"))
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  });
