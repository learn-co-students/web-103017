class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
  end


  def show
    @appointment = Appointment.find(params[:id])
  end

  def new
    @appointment = Appointment.new
  end


  def create
    @appointment = Appointment.create(appointment_params)
    redirect_to appointment_path(@appointment)
  end


  def appointment_params
    params.require(:appointment).permit(:time, :doctor_id, :patient_id)
  end
end
