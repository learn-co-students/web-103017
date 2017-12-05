class Doctor < ApplicationRecord
  # validates :name, :speciality, presence: true
  # validates :registration_number, uniqueness: true
  has_many :appointments
  has_many :patients, through: :appointments


  def appointments_for(patient)
    self.appointments.select do |apt|
      apt.patient_id == patient.id
    end
  end
end
