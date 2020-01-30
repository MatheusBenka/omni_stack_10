import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  return (
      <div id="app">
        <aside>
            <strong>Cadastrar</strong>
            <form>

                <div className="input-block">
                  <label htmlFor="github_username">Usuário do GitHub</label>
                  <input name="github_username" type="text" id="github_username" required></input>
                </div>

                <div className="input-block">
                  <label htmlFor="techs">Tecnologias </label>
                  <input name="techs" type="text" id="techs" required></input>
                </div>


                <div className="input-group">

                  <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input name="latitude" id="latitude" required></input> 
                  </div>

                  <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input name="longitude" id="longitude" required></input> 
                  </div>

                </div>

                <button type="submit">Salvar</button>
                
            </form>

        </aside>
        <main>
          <ul>
              <li className="dev-item">
                  <header>
                    <img src="https://avatars3.githubusercontent.com/u/22007426?v=4" alt="red-panda" />
                    <div className="dev-info">
                      <strong>Matheus Benka</strong>
                      <span>C#, React talves</span>
                    </div>
                  </header>
                  <p>
                      Desenvolvedor...
                  </p>
                  <a href="https://github.com/MatheusBenka">Perfil GitHub</a>
              </li>
              <li className="dev-item">
                  <header>
                    <img src="https://avatars3.githubusercontent.com/u/22007426?v=4" alt="red-panda" />
                    <div className="dev-info">
                      <strong>Matheus Benka</strong>
                      <span>C#, React talves</span>
                    </div>
                  </header>
                  <p>
                      Desenvolvedor...
                  </p>
                  <a href="https://github.com/MatheusBenka">Perfil GitHub</a>
              </li>
              <li className="dev-item">
                  <header>
                    <img src="https://avatars3.githubusercontent.com/u/22007426?v=4" alt="red-panda" />
                    <div className="dev-info">
                      <strong>Matheus Benka</strong>
                      <span>C#, React talves</span>
                    </div>
                  </header>
                  <p>
                      Desenvolvedor...
                  </p>
                  <a href="https://github.com/MatheusBenka">Perfil GitHub</a>
              </li>
          </ul>

        </main>
      </div>

  );
}

export default App;
