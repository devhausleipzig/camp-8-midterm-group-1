export function InputForm() {
  <div className="w-screen h-screen flex justify-center items-center">
    <form
      id="form-placeholder"
      className="w-1/3 h-2/3 bg-slate-400 flex flex-col justify-around items-center"
    >
      <legend>Form</legend>

      <input type="text" name="Name" placeholder="Name" />

      <input type="password" name="password" placeholder="Password" />

      <input type="email" name="email-address" placeholder="Email address" />

      <input type="number" name="age" max="100" min="0" />

      <input type="date" name="birthday" />
      <input
        id="checkbox"
        type="checkbox"
        name="Share data"
        checked
        value="true"
      />
      <p>fav fruit</p>
      <fieldset>
        <label htmlFor="fruta1">
          <input type="radio" value="pear" name="fruta" id="fruta" />
          Pear
        </label>

        <label htmlFor="fruta2">
          <input type="radio" value="apple" name="hello" />
          apple
        </label>

        <label htmlFor="fruta3">
          <input type="radio" value="banana" name="hello" /> banana
        </label>
      </fieldset>

      <label htmlFor="city-select">Choose a city</label>
      <select name="city" id="city-select">
        <option value="berlin">berlin</option>
        <option value="Paris">Paris</option>
        <option value="Temuco">Temuco</option>
        <option value="Cairo">Cairo</option>
        <option value="Roma">Roma</option>
      </select>

      <button type="submit" className="bg-blue-600 rounded-md p-4">
        Submit Form
      </button>
    </form>
  </div>;
  <script type="module" src="/src/main.ts"></script>;
}
