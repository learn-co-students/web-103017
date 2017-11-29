class PatientsController < ApplicationController
  def index
    @patients = Patient.all
  end
  
  
  def show 
    @patient = Patient.find(params[:id])
  end

  def new
    @patient = Patient.new
  end

  def create
    byebug
  end
  
  
  def patient_params
    params.require(:patient).permit(:name, :doctor_id)
  end
end
