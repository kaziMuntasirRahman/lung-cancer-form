const Form = () => {
  const handlePredict = (event)=>{
    event.preventDefault();
    const form = event.target;
    const gender = form.gender.value;
    const age = form.age.value;
    const smoking = form.smoking.value;
    const chewingTobacco = form.chewingTobacco.value;
    const coughing = form.coughing.value;
    const shortnessOfBreath = form.shortnessOfBreath.value;
    const chestPain = form.chestPain.value;
    const coughingUpBlood = form.coughingUpBlood.value;
    const weightLoss = form.weightLoss.value;
    const fatigue = form.fatigue.value;
    const wheezing = form.wheezing.value;
    const dustAllergy = form.dustAllergy.value;

    const status = {gender, age, smoking, chewingTobacco, coughing, shortnessOfBreath, chestPain, coughingUpBlood, weightLoss, fatigue, wheezing, dustAllergy};

    console.log(status);
    form.reset();
  }
  return (
    <div className="w-screen h-screen bg-sky-300 flex flex-col justify-center items-center lg:overflow-hidden">
      <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-semibold my-4">Lung Cancer Prediction</h1>

      <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-2 border md:gap-y-8 justify-items-center w-9/12 md:w-3/4 lg:w-1/2 rounded-xl p-5">
        {/* select gender */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Gender</span>
            <select className="select select-bordered" name="gender" required>
              <option disabled selected>select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>
          {/* input age */}
        <label className="form-control w-full max-w-xs" required>
          <span className="label label-text">Age</span>
          <input type="number" placeholder="enter age" className="input input-bordered w-full max-w-xs" name="age" min={0} required />
        </label>
        {/* select smoking status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Do you smoke?</span>
            <select className="select select-bordered" name="smoking">
              <option disabled selected>Does victim smoke?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select chewing tobacco status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Do you drink or eat tobacco?</span>
            <select className="select select-bordered" name="chewingTobacco">
              <option disabled selected>does patient chew tobacco?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select coughing status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Coughing</span>
            <select className="select select-bordered" name="coughing">
              <option disabled selected>Do you have a dry cough? </option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select shortness of breath status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Shortness Of Breath</span>
            <select className="select select-bordered" name="shortnessOfBreath">
              <option disabled selected>Do you have breathing problems?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select chest pain status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Chest Pain</span>
            <select className="select select-bordered" name="chestPain">
              <option disabled selected>Do you have chest pain? </option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select coughing up blood status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Coughing up blood</span>
            <select className="select select-bordered" name="coughingUpBlood">
              <option disabled selected>Are you experiencing coughing with blood? </option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select weight loss status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Unintended Weight Loss</span>
            <select className="select select-bordered" name="weightLoss">
              <option disabled selected>Are you losing weight? </option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select Fatigue status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Fatigue</span>
            <select className="select select-bordered" name="fatigue">
              <option disabled selected>Are you feeling weak? </option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select wheezing status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Is your respiratory system producing unusual sounds? </span>
            <select className="select select-bordered" name="wheezing">
              <option disabled selected>does patient have wheezing?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select dust allergy status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Dust Allergy</span>
            <select className="select select-bordered" name="dustAllergy">
              <option disabled selected>Do you have allergies?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>

          <button className="btn btn-accent md:col-span-2 md:min-w-96  my-2">Predict</button>
      </form>
    </div>
  );
};

export default Form;