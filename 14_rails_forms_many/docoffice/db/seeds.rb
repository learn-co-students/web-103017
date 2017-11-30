# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Doctor.all.each { |doc| doc.destroy }
Patient.all.each { |pat| pat.destroy }

5.times do
  specialities = ["Heart", "Foot", "Neuro", "Bone", "Back"]
  doc = Doctor.create(name: Faker::Name.name, speciality: specialities.sample, registration_number: Faker::Number.number(6))
end

10.times do
  conditions = ["Heart Attack", "Broken Foot", "Headache", "Eye Exam"]
  Patient.create(name: Faker::Name.name, condition: conditions.sample, doctor: Doctor.all.sample)
end



# Appointment.all.each { |app| app.destroy }
# Doctor.all.each { |doc| doc.destroy }
# Patient.all.each { |pat| pat.destroy }
#
# 20.times do
#   conditions = ["Heart Attack", "Broken Foot", "Headache", "Eye Exam"]
#   Patient.create(name: Faker::Name.name, condition: conditions.sample)
# end
# 5.times do
#   specialities = ["Heart", "Foot", "Neuro", "Bone", "Back"]
#   doc = Doctor.create(name: Faker::Name.name, speciality: specialities.sample, registration_number: Faker::Number.number(6))
#   doc.patients << Patient.all.sample
#   doc.patients << Patient.all.sample
#   doc.patients << Patient.all.sample
# end
