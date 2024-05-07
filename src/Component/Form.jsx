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
    <div className="w-screen h-screen bg-sky-300 flex flex-col justify-center items-center">
      <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold text-black my-4">Lung Cancer Prediction</h1>

      <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-2 border gap-y-4 justify-items-center w-9/12 md:w-3/4 lg:w-1/2">
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
          <input type="number" placeholder="enter age" className="input input-bordered w-full max-w-xs" required name="age" />
        </label>
        {/* select smoking status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Smoking</span>
            <select className="select select-bordered" name="smoking">
              <option disabled selected>Does victim smoke?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select chewing tobacco status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Chewing Tobacco</span>
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
              <option disabled selected>does patient cough?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select shortness of breath status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Shortness Of Breath</span>
            <select className="select select-bordered" name="shortnessOfBreath">
              <option disabled selected>does patient have shortness of breath?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select chest pain status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Chest Pain</span>
            <select className="select select-bordered" name="chestPain">
              <option disabled selected>does patient have chest pain?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select coughing up blood status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Coughing up blood</span>
            <select className="select select-bordered" name="coughingUpBlood">
              <option disabled selected>does patient cough up with blood?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select weight loss status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Unintended Weight Loss</span>
            <select className="select select-bordered" name="weightLoss">
              <option disabled selected>does patient loose weight unintentionally?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select Fatigue status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Fatigue</span>
            <select className="select select-bordered" name="fatigue">
              <option disabled selected>does patient have fatigue?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          {/* select wheezing status */}
          <label className="form-control w-full max-w-xs" required>
            <span className="label label-text">Wheezing</span>
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
              <option disabled selected>does patient have dust allergy?</option>
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>

          <button className="btn btn-accent md:col-span-2 md:min-w-96  my-6">Predict</button>
      </form>
    </div>
  );
};

export default Form;