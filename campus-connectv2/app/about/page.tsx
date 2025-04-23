import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { CollegeBanner } from "@/components/college-banner"
import { ShowPopupButton } from "@/components/show-popup-button"

export default function AboutPage() {
  const bannerSlides = [
    {
      id: "1",
      title: "Sir M. Visvesvaraya Institute Of Technology",
      description: "Excellence in Education Since 1986",
      image: "https://www.sirmvit.edu/wp-content/uploads/2023/01/home-slider-1-new.jpg",
    },
    {
      id: "2",
      title: "State-of-the-art Facilities",
      description: "Modern infrastructure for exceptional learning experiences",
      
      image: "https://www.sirmvit.edu/wp-content/uploads/2025/03/New-library.jpg",
    },
    {
      id: "3",
      title: "Innovation & Research",
      description: "Fostering a culture of innovation and academic excellence",
      image: "https://www.sirmvit.edu/wp-content/uploads/2020/03/sirmvit-slider-2.jpg",
    },
    {
      id: "4",
      title: "Vibrant Campus Life",
      description: "A dynamic community with diverse opportunities",
      image: "https://www.sirmvit.edu/wp-content/uploads/2020/03/sirmvit-slider-3-1.jpg",
    },
    {
      id: "5",
      title: "Building Future Leaders",
      description: "Empowering students to excel in a global environment",
      image: "https://www.sirmvit.edu/wp-content/uploads/2018/11/sirmvit-home-slider-3.jpg",
    }
  ]

  const stats = [
    { value: "186+", label: "TEACHING STAFF" },
    { value: "42", label: "STAFF WITH Ph.D. DEGREE" },
    { value: "114", label: "UNIVERSITY RANKS" },
    { value: "950+", label: "RESEARCH PUBLICATIONS" },
    { value: "91%", label: "PLACEMENTS" },
    { value: "3500+", label: "REGISTERED STUDENTS" }
  ]

  const testimonials = [
    {
      content: "The curriculum and faculty at Sir MVIT have been instrumental in shaping my career. The hands-on experience I gained here prepared me for the challenges of the industry.",
      author: "Ravi Kumar",
      role: "Software Engineer, Google",
      batch: "CSE, 2020"
    },
    {
      content: "The research opportunities at Sir MVIT are exceptional. The mentorship I received from my professors helped me publish papers in prestigious journals even as an undergraduate.",
      author: "Priya Sharma",
      role: "Research Scientist, ISRO",
      batch: "ECE, 2019"
    },
    {
      content: "The campus life at Sir MVIT offers the perfect balance of academics and extracurriculars. I was able to pursue my passion for robotics while excelling in my studies.",
      author: "Akshay Patel",
      role: "Robotics Engineer, ABB",
      batch: "Mechanical, 2021"
    }
  ]

  const facultyInfo = [
    {
      department: "Electrical & Electronics Engineering",
      members: [
        { name: "Dr. Suresh H.L.", role: "Professor and Head" },
        { name: "Dr. Mahesh K.", role: "Professor" },
        { name: "Dr. C.V. Mohan", role: "Professor" }
      ]
    },
    {
      department: "Information Science & Engineering",
      members: [
        { name: "Dr. G.C. Bhanuprakash", role: "Professor & HOD" },
        { name: "Dr. Sheshappa S.N.", role: "Professor" },
        { name: "Mr. Raghav S.", role: "Assistant Professor" },
        { name: "Ms. Suguna M.K.", role: "Assistant Professor" }
      ]
    },
    {
      department: "Biotechnology",
      members: [
        { name: "Dr. Rajendra Singh C.", role: "Associate Professor & Head" },
        { name: "Dr. Priya Narayan", role: "Professor" },
        { name: "Dr. Mrinalini Menon", role: "Professor" }
      ]
    },
    {
      department: "Mathematics",
      members: [
        { name: "Dr. S. Sreelakshmi", role: "Professor & HOD" },
        { name: "Ms. S. Uma", role: "Assistant Professor" },
        { name: "Dr. Chaya T.Y.", role: "Associate Professor" }
      ]
    }
  ];

  const accreditations = [
    {
      name: "NAAC",
      description: "Accredited by National Assessment and Accreditation Council with 'A' Grade",
      logo: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "NBA",
      description: "Multiple programs accredited by the National Board of Accreditation",
      logo: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "AICTE",
      description: "Approved by All India Council for Technical Education, New Delhi",
      logo: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "VTU",
      description: "Affiliated to Visvesvaraya Technological University, Belagavi",
      logo: "/placeholder.svg?height=80&width=80"
    }
  ]

  const facilities = [
    "A sprawling 133 acres of lush green campus housing",
    "State-of-the-art facilities",
    "Modern laboratories and research centers",
    "Spacious classrooms with multimedia facilities",
    "Central library with extensive collection and digital resources",
    "Separate hostels for boys and girls",
    "Sports complex with indoor and outdoor facilities"
  ]

  return (
    <main className="flex-1">
      {/* Banner Section */}
      <CollegeBanner slides={bannerSlides} height="h-[600px]" />

      {/* About Section */}
      <AnimatedSection className="container py-16 max-w-5xl">
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold">About Our Institution</h2>
            <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sir M. Visvesvaraya Institute of Technology (Sir MVIT) is a Higher Education Institution in the state of Karnataka, 
            founded by the Sri Krishnadevaraya Educational Trust in 1986. The Institute offers thirteen B.E. degree programs in 
            Artificial Intelligence & Machine Learning, Biotechnology, Civil Engineering, Computer Science & Engineering, 
            Computer Science & Engineering(Data Science), CSE (IoT & Cybersecurity including Blockchain Technology), 
            Electronics & Communication Engineering, Electronics and Computer Engineering, Electrical & Electronics Engineering, 
            Electronics & Telecommunication Engineering, Information Science & Engineering, Mechanical Engineering, 
            Robotics & Artificial Intelligence.
          </p>

          <div className="mt-10 space-y-4">
            <h3 className="text-2xl font-semibold">Our Campus</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {facilities.map((facility, index) => (
                <li key={index} className="text-lg">{facility}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="bg-primary/5 py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</span>
                <div className="h-0.5 w-10 bg-primary/40 my-3"></div>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection className="container py-16">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold">Campus Gallery</h2>
          <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bannerSlides.slice(1).map((slide, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 z-10" />
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                <h3 className="text-white text-lg font-medium">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Faculty Section - NEW */}
      <AnimatedSection className="container py-16">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold">Our Faculty</h2>
          <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
          <p className="text-muted-foreground max-w-3xl">
            Sir MVIT boasts a team of qualified and dedicated faculty members across various departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facultyInfo.map((dept, index) => (
            <div key={index} className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-bold border-b pb-2 mb-4">{dept.department}</h3>
              <ul className="space-y-3">
                {dept.members.map((member, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span className="font-medium">{member.name}</span>
                    <span className="text-sm text-muted-foreground">{member.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="bg-muted/50 py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold">Student Testimonials</h2>
            <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <svg width="45" height="36" className="text-primary/30" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 18H9C9 12.4772 13.4772 8 19 8V13C16.2386 13 14 15.2386 14 18H18C19.6569 18 21 19.3431 21 21V30C21 31.6569 19.6569 33 18 33H11C9.34315 33 8 31.6569 8 30V21C8 19.3431 9.34315 18 11 18H13.5ZM34.5 18H30C30 12.4772 34.4772 8 40 8V13C37.2386 13 35 15.2386 35 18H39C40.6569 18 42 19.3431 42 21V30C42 31.6569 40.6569 33 39 33H32C30.3431 33 29 31.6569 29 30V21C29 19.3431 30.3431 18 32 18H34.5Z"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground/70">{testimonial.batch}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Accreditation Section */}
      <AnimatedSection className="container py-16">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold">Accreditation & Recognitions</h2>
          <div className="h-1 w-20 bg-primary mt-4 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-lg border hover:shadow-md transition-shadow">
              <img 
                src={accreditation.logo} 
                alt={accreditation.name} 
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{accreditation.name}</h3>
              <p className="text-sm text-muted-foreground">{accreditation.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-primary/5 py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of a legacy of excellence and innovation. Apply today to explore our programs and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8">Apply Now</Button>
            <Button size="lg" variant="outline" className="px-8">Contact Us</Button>
          </div>
          
          {/* Popup Button */}
          <div className="mt-8 pt-8 border-t border-primary/10">
            <ShowPopupButton />
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
} 