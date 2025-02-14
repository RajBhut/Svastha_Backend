import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.nGO.createMany({
    data: [
      {
        orgName: "Seva Trust",
        regNumber: "ST12345",
        email: "info@sevatrust.org",
        phone: "9876543210",
        address: "12, MG Road, Mumbai, Maharashtra",
        website: "https://sevatrust.org",
        foundingYear: "1998",
        proofOfRegistration: "sevatrust_certificate.pdf",
        contactPerson: {
          name: "Rajesh Sharma",
          position: "Founder",
          email: "rajesh.sharma@sevatrust.org",
          phone: "9876543210",
        },
      },
      {
        orgName: "Annapurna Foundation",
        regNumber: "AF67890",
        email: "support@annapurna.org",
        phone: "8765432109",
        address: "56, Bannerghatta Road, Bengaluru, Karnataka",
        website: "https://annapurna.org",
        foundingYear: "2005",
        proofOfRegistration: "annapurna_certificate.pdf",
        contactPerson: {
          name: "Sumanth Rao",
          position: "Chairperson",
          email: "sumanth.rao@annapurna.org",
          phone: "8765432109",
        },
      },
      {
        orgName: "Jeevan Daan",
        regNumber: "JD11223",
        email: "contact@jeevandaan.org",
        phone: "7654321098",
        address: "101, Ashok Nagar, Delhi",
        website: "https://jeevandaan.org",
        foundingYear: "2012",
        proofOfRegistration: "jeevandaan_certificate.pdf",
        contactPerson: {
          name: "Neha Verma",
          position: "Director",
          email: "neha.verma@jeevandaan.org",
          phone: "7654321098",
        },
      },
      {
        orgName: "Nanhi Kali",
        regNumber: "NK33445",
        email: "nanhi.kali@ngo.org",
        phone: "7543210987",
        address: "Plot 22, Banjara Hills, Hyderabad, Telangana",
        website: "https://nanhikali.org",
        foundingYear: "1996",
        proofOfRegistration: "nanhikali_certificate.pdf",
        contactPerson: {
          name: "Deepika Iyer",
          position: "Project Lead",
          email: "deepika.iyer@nanhikali.org",
          phone: "7543210987",
        },
      },
      {
        orgName: "Goonj",
        regNumber: "GJ55667",
        email: "hello@goonj.org",
        phone: "7432109876",
        address: "Sector 14, Gurugram, Haryana",
        website: "https://goonj.org",
        foundingYear: "1999",
        proofOfRegistration: "goonj_certificate.pdf",
        contactPerson: {
          name: "Anshu Gupta",
          position: "Founder & CEO",
          email: "anshu.gupta@goonj.org",
          phone: "7432109876",
        },
      },
      {
        orgName: "Smile India",
        regNumber: "SI77889",
        email: "contact@smileindia.org",
        phone: "7321098765",
        address: "Park Street, Kolkata, West Bengal",
        website: "https://smileindia.org",
        foundingYear: "2010",
        proofOfRegistration: "smileindia_certificate.pdf",
        contactPerson: {
          name: "Pooja Sen",
          position: "Managing Director",
          email: "pooja.sen@smileindia.org",
          phone: "7321098765",
        },
      },
      {
        orgName: "Pratham India",
        regNumber: "PI99001",
        email: "support@pratham.org",
        phone: "7210987654",
        address: "Mira Road, Thane, Maharashtra",
        website: "https://pratham.org",
        foundingYear: "1994",
        proofOfRegistration: "pratham_certificate.pdf",
        contactPerson: {
          name: "Vivek Mishra",
          position: "Head of Operations",
          email: "vivek.mishra@pratham.org",
          phone: "7210987654",
        },
      },
      {
        orgName: "Udaan Foundation",
        regNumber: "UF11234",
        email: "info@udaanfoundation.org",
        phone: "7109876543",
        address: "32, Civil Lines, Jaipur, Rajasthan",
        website: "https://udaanfoundation.org",
        foundingYear: "2018",
        proofOfRegistration: "udaan_certificate.pdf",
        contactPerson: {
          name: "Amit Trivedi",
          position: "Founder",
          email: "amit.trivedi@udaanfoundation.org",
          phone: "7109876543",
        },
      },
      {
        orgName: "Ekta Seva",
        regNumber: "ES22345",
        email: "help@ektaseva.org",
        phone: "7098765432",
        address: "56, Andheri West, Mumbai, Maharashtra",
        website: "https://ektaseva.org",
        foundingYear: "2002",
        proofOfRegistration: "ektaseva_certificate.pdf",
        contactPerson: {
          name: "Kiran Patil",
          position: "President",
          email: "kiran.patil@ektaseva.org",
          phone: "7098765432",
        },
      },
      {
        orgName: "Saksham India",
        regNumber: "SI33456",
        email: "contact@saksham.org",
        phone: "6987654321",
        address: "Connaught Place, Delhi",
        website: "https://saksham.org",
        foundingYear: "2007",
        proofOfRegistration: "saksham_certificate.pdf",
        contactPerson: {
          name: "Meena Nair",
          position: "Director",
          email: "meena.nair@saksham.org",
          phone: "6987654321",
        },
      },
      {
        orgName: "Navjyoti Foundation",
        regNumber: "NF44567",
        email: "support@navjyoti.org",
        phone: "6876543210",
        address: "Sector 37, Noida, Uttar Pradesh",
        website: "https://navjyoti.org",
        foundingYear: "1992",
        proofOfRegistration: "navjyoti_certificate.pdf",
        contactPerson: {
          name: "Rahul Saxena",
          position: "Executive Director",
          email: "rahul.saxena@navjyoti.org",
          phone: "6876543210",
        },
      },
      {
        orgName: "Seva Bharati",
        regNumber: "SB55678",
        email: "help@sevabharati.org",
        phone: "6765432109",
        address: "Basavanagudi, Bengaluru, Karnataka",
        website: "https://sevabharati.org",
        foundingYear: "1984",
        proofOfRegistration: "sevabharati_certificate.pdf",
        contactPerson: {
          name: "Manjunath Gowda",
          position: "National Coordinator",
          email: "manjunath.gowda@sevabharati.org",
          phone: "6765432109",
        },
      },
    ],
  });

  console.log("NGOs inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
