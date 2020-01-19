<template>
    <v-content>
    <template>
          
      <v-parallax  height="300"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"><h1 class="text-center">PARTNER UNIVERSITIES </h1></v-parallax>

    </template>
        <v-container >

        <v-flex>
      <v-container pb-5 class="cont">
        <p>With international tie ups we facilitate networking of our students and faculty as well as impart training to them to:</p>
            <ul>
<li>	Enjoy living and working in various countries with different cultural environment</li>
<li>	Gain practical experience in real international work environment, industries, research institutes, consulting firms and laboratories</li>
<li>	Obtain cutting edge technical knowledge and experience</li>
<li>	Develop professional contacts and stand out to potential employers by enhancing their CVs</li>
<li>	Improve social and cultural skills.</li>
            </ul>
<br>
<p>MUJ has established international programs and MoUs with the following Institutes/Universities abroad:</p>

      </v-container>
        </v-flex>

<!--  <v-flex>
       <v-card class="pa-5" v-for="item in desserts" :key="item.name" :href="item.link" rel="noopener noreferrer" target="_blank" >
        <p class="sty px-5">{{ item.name }}</p>
        <p class="sty px-5"> {{ item.nofficer }}</p>
        </v-card>
</v-flex> 
 -->
<v-flex>
  <a v-for="item in desserts" :key="item.name" :href="item.link" rel="noopener noreferrer" target="_blank">
  <v-sheet :elevation="2" class="pa-5" >
    <p class="sty px-5">{{ item.name }}</p>
    <p class="sty px-5"> {{ item.nofficer }}</p>
  </v-sheet>
  <br></a>
</v-flex>
        </v-container>
    </v-content>
</template>


<style scoped>
.sty {
  font-family: 'Varela Round', sans-serif;  
}

</style>
<script>
  export default {      
    name: 'list',
    
    data () {
      return {
        
        desserts: [
          {
            name: 'The International Association for the Exchange of Students for Technical Experience (IAESTE)',
            no: 1,
            nofficer: 'Prof. D. P. Sharma',
            link: 'https://google.com'
          },
          {
            name: 'Network of Engineering Institutes, Paris France',
            no: 2,
            nofficer: 'Dr. Amit Saraswat',
            link: 'https://google.com'
          },
          {
            name: 'Chartered Institute of Management Accountants (CIMA)',
            no: 3,
            nofficer: 'Prof. M. L. Vadera',
            link: 'https://google.com'
          },
          {
            name: 'Universal College of Learning, Palmerston North, New Zealand (UCOL)',
            no: 4,
            nofficer: 'Prof. Pratibha Sharma',
            link: 'https://google.com'
          },
          {
            name: 'Edinburgh Napier University, UK',
            no: 5,
            nofficer: 'Dr Sumit Srivastava',
            link: 'https://google.com'
          },
          {
            name: 'TRC Worldwide Engineering Virginia (US)',
            no: 6,
            nofficer: 'Dr Tanmoy Chakraborty ',
            link: 'https://google.com'
          },
          {
            name: 'University of Leicester, UK  (MoU)',
            no: 7,
            nofficer: 'Dr. Nilanjan Haldar',
            link: 'https://google.com'
          },
          {
            name: 'Agreement of Cooperation (Agreement)',
            no: 8,
            nofficer: 'Dr. Nilanjan Haldar',
            link: 'https://google.com'
          },
          {
            name: 'Florida International University, Greater Miami, Florida US',
            no: 9,
            nofficer: 'Dr. Sandeep Chaurasia',
            link: 'https://google.com'
          },
          {
            name: 'Global Nxt University Malaysia',
            no: 10,
            nofficer: 'Dr. Samar Sarabhai',
            link: 'https://google.com'
          },
          {
            name: 'California State University Monterey Bay (CSUMB), USA',
            no: 11,
            nofficer: 'Dr. Prof. Raghuvir Singh',
            link: 'https://google.com'
          },
          {
            name: 'Otago  Polytechnic  Auckland, New Zealand ',
            no: 12,
            nofficer: 'Dr Rajesh Solanki',
            link: 'https://google.com'
          },
          {
            name: 'University of Applied Science, Western Switzerland, Summer University Switzerland Courses at Singapore',
            no: 13,
            nofficer: 'Prof. Sandeep Joshi',
            link: 'https://google.com'
          },
          {
            name: 'National  Education Foundation ( NEF) Washington DC',
            no: 14,
            nofficer: 'Dr Deepshikha Sharma',
            link: 'https://google.com'
          },
          {
            name: 'T&R Consulting  Pvt Ltd. Australia',
            no: 15,
            nofficer: 'Dr Archana Poonia ',
            link: 'https://google.com'
          },
          {
            name: 'Hochschul Bremen University, Germany',
            no: 16,
            nofficer: 'Mr. Hemant Aggarwal',
            link: 'https://google.com'
          },
          {
            name: 'Electronic & Computer Engineering Division, Ngee Ann Polytechnic, Singapore',
            no: 17,
            nofficer: 'Mr. Mahesh Jangid',
            link: 'https://google.com'
          },
          {
            name: 'University of Missouri- Kansas City (UMKC), USA MoA (Ariculation) UMKC’s School of Computing and Engineering',
            no: 18,
            nofficer: 'Dr. Amit Soni',
            link: 'https://google.com'
          },
          {
            name: 'L’Ecole Bleue School of Global Design, Peris, France',
            no: 19,
            nofficer: 'Prof. Madhura Yadav',
            link: 'https://google.com'
          },
          {
            name: 'Association of Chartered Certified Accountants (ACCA) U. K.',
            no: 20,
            nofficer: 'Prof. M. L. Vadera',
            link: 'https://google.com'
          },
          {
            name: 'International Skills Development Corporation (ISDC) U. K.',
            no: 21,
            nofficer: 'Prof. M. L. Vadera',
            link: 'https://google.com'
          },
          {
            name: 'Plymouth University UK (Psychology Dept)',
            no: 22,
            nofficer: 'Prof. Geetika Tankha',
            link: 'https://google.com'
          },
          {
            name: 'Szechneyi Istvan University, Gyor, Hungry',
            no: 23,
            nofficer: 'Mr. Amit Datta',
            link: 'https://google.com'
          },
          {
            name: 'ESTACA – Ecole Superieure des Techniques Aeronautiques et de Construction Automobile, France',
            no: 24,
            nofficer: 'Dr. Ashish Malik',
            link: 'https://google.com'
          },
          {
            name: 'a)  CESI France (b)  Addendum 1 CESI France',
            no: 25,
            nofficer: 'Prof. Rajveer Shekhawat',
            link: 'https://google.com'
          },
          {
            name: 'Flinders University, Adelaide, Australia',
            no: 26,
            nofficer: 'Dr. Pushpendra Kumar',
            link: 'https://google.com'
          },
          {
            name: 'ISEP Portugal',
            no: 27,
            nofficer: 'Dr. Nitin Goyal',
            link: 'https://google.com'
          },
          {
            name: 'Strathclyde University UK',
            no: 28,
            nofficer: 'Prof. Manish Tiwari',
            link: 'https://google.com'
          },
          {
            name: 'St. Cloud State University Minnesota, USA',
            no: 29,
            nofficer: 'Dr. Sumit Srivastava',
            link: 'https://google.com'
          },
          {
            name: 'Cranfield University, England (UK)',
            no: 30,
            nofficer: 'Prof. G. L. Sharma',
            link: 'https://google.com'
          },
          {
            name: 'Hochschule Bremen (HSB) City University of Applied Sciences, Germany',
            no: 31,
            nofficer: 'Mr. Hemant Aggarwal',
            link: 'https://google.com'
          },
          {
            name: 'Ecole Centrale De Nantes (ECN), France ',
            no: 32,
            nofficer: 'Dr. Ravi Kumar Gupta',
            link: 'https://google.com'
          },
          {
            name: 'Rennes School of Business, France',
            no: 33,
            nofficer: '',
            link: 'https://google.com'
          },
          {
            name: 'EPF Ecole, France',
            no: 34,
            nofficer: 'Dr Amit Saraswat ',
            link: 'https://google.com'
          },
          {
            name: 'Warsaw Mangement University, Poland',
            no: 35,
            nofficer: 'Dr. Akhilesh Sharma',
            link: 'https://google.com'
          },
          {
            name: 'Siberian Federal University ( Krasnoyarsk, Russian Federation )',
            no: 36,
            nofficer: 'Prof. Anand Gupta Chakinala',
            link: 'https://google.com'
          },
          {
            name: 'National Technical University of Ukraine ',
            no: 37,
            nofficer: 'Mr. Vidyadhar Aski',
            link: 'https://google.com'
          },
          {
            name: 'Iowa State University, USA',
            no: 38,
            nofficer: 'Mr. Ankit Mundra',
            link: 'https://google.com'
          },
          {
            name: 'University of Johannesburg, South Africa  ',
            no: 39,
            nofficer: 'Dr. Anand Pandey/ Dr. Manish Rawat',
            link: 'https://google.com'
          },
          {
            name: 'Universiti Malaysia Pahang, Malaysia  ',
            no: 40,
            nofficer: 'Dr. Santosh Patil',
            link: 'https://google.com'
          },
          {
            name: 'The University of Newcastle, Australia',
            no: 41,
            nofficer: 'Dr. Narendra Singh Bhati',
            link: 'https://google.com'
          },
          {
            name: 'University of  Denver Colorado USA',
            no: 42,
            nofficer: '',
            link: 'https://google.com'
          },
           {
            name: 'Illinois State University Illinois, USA',
            no: 43,
            nofficer: 'Dr Gaurav Sancheti',
            link: 'https://google.com'
          },
           {
            name: 'Technical  University of Varna, Bulgaria ',
            no: 44,
            nofficer: 'Dr Amita Nandal',
            link: 'https://google.com'
          },
           {
            name: 'University of  Ostrava Czech  Republic',
            no: 45,
            nofficer: 'Dr Amita Nandal',
            link: 'https://google.com'
          },
           {
            name: 'Curtin University  Malaysia ',
            no: 46,
            nofficer: 'Dr Abhishek Sharma',
            link: 'https://google.com'
          },
           {
            name: 'International  College of Hotel Management ( ICHM Adelaide, Australia)',
            no: 47,
            nofficer: 'Dr Amit Dutta',
            link: 'https://google.com'
          },
           {
            name: 'AIESEC Jaipur ',
            no: 48,
            nofficer: 'Mr Harshwardhan Soni',
            link: 'https://google.com'
          },
           {
            name: 'Russian  State Social University ( General Cooperation  Agreement)',
            no: 49,
            nofficer: '',
            link: 'https://google.com'
          },
           {
            name: 'Student  Exchange Agreement ',
            no: 50,
            nofficer: '',
            link: 'https://google.com'
          },
           {
            name: 'Bauman Moscow State Technical  University (BMSTU) Moscow, Russia ',
            no: 51,
            nofficer: '',
            link: 'https://google.com'
          },
           {
            name: 'Kathmandu University (KU) Nepal ',
            no: 52,
            nofficer: 'Dr Dhaneshwar Mishra',
            link: 'https://google.com'
          },
           {
            name: 'Polytechnic Institute of Leiria, Portugal',
            no: 53,
            nofficer: 'Dr Naina Narang',
            link: 'https://google.com'
          },
           {
            name: 'Mathematical  Institute of the Serbian Academy of Sciences and Arts, Belgrade, Serbia',
            no: 54,
            nofficer: 'Dr Santosh Patil',
            link: 'https://google.com'
          },
           {
            name: 'Gubkin University, Russia',
            no: 55,
            nofficer: '',
            link: 'https://google.com'
          },
           {
            name: 'Small Business Association of Australia (SBAA)',
            no: 56,
            nofficer: '',
            link: 'https://google.com'
          },
           {
            name: 'King Mongkut’s University of Technology North Bangkok',
            no: 57,
            nofficer: 'Dr. Akhilesh Kumar Sharma',
            link: 'https://google.com'
          },
           {
            name: 'ESIGEL60EC, France',
            no: 58,
            nofficer: '',
            link: 'https://google.com'
          },
           {
            name: 'Nanjing Forestry University, China ',
            no: 59,
            nofficer: 'Dr. Sanchita B Ghosh/ Mr. Firoz Alam',
            link: 'https://google.com'
          },
           {
            name: 'Varna University of Management, Varna, Bulgaria',
            no: 60,
            nofficer: 'Dr. Deepika Kaur',
            link: 'https://google.com'
          },
           {
            name: 'University of Florida (UF), USA',
            no: 61,
            nofficer: 'Dr. Punit Gupta',
            link: 'https://google.com'
          },
           {
            name: 'ICE WaRM Adelaide, Australia',
            no: 62,
            nofficer: 'Dr Monika Sogani',
            link: 'https://google.com'
          },
           {
            name: 'Nottingham Trent University United Kingdom',
            no: 63,
            nofficer: 'Prof Pratibha Sharma',
            link: 'https://google.com'
          },
           {
            name: 'Deakin University Victoria, Australia',
            no: 64,
            nofficer: 'Mr Ankit Mundra',
            link: 'https://google.com'
          },
           {
            name: 'CSIRO, Australia',
            no: 65,
            nofficer: 'Dr Monika Sogani',
            link: 'https://google.com'
          },
           {
            name: 'Sothern Federal University Russia',
            no: 66,
            nofficer: 'Prof. Sandeep Joshi',
            link: 'https://google.com'
          },
           {
            name: 'AEROHELP Institute of Air and Space Law, Russia',
            no: 67,
            nofficer: 'Mr Prabhpreet Singh',
            link: 'https://google.com'
          },
           {
            name: 'University of South Wales',
            no: 68,
            nofficer: 'Ajay Kumar Sharma',
            link: 'https://google.com'
          },
           {
            name: 'University of Malta',
            no: 69,
            nofficer: 'Mohit Jain and Princy Randhawa',
            link: 'https://google.com'
          },
           {
            name: 'AL Farabi Kazakh National University',
            no: 70,
            nofficer: 'Ajay Kumar Sharma',
            link: 'https://google.com'
          },
           {
            name: 'Ajman University',
            no: 71,
            nofficer: 'Ravi Kant Gupta',
            link: 'https://google.com'
          },
           {
            name: 'National Law College',
            no: 72,
            nofficer: 'Prabhpreet Singh',
            link: 'https://google.com'
          },
           {
            name: 'ITMO University',
            no: 73,
            nofficer: 'Ajay Kumar Sharma',
            link: 'https://google.com'
          },
           {
            name: 'National University of Uzbekistan',
            no: 74,
            nofficer: 'Ajay Kumar Sharma',
            link: 'https://google.com'
          },
        ],
      }
    },
  }
</script>