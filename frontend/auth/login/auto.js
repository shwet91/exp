
        const header = document.getElementById('form-header');
        const container = document.getElementById('form-container');
        const toggleText = document.getElementById('toggle-text');
        const toggleLink = document.getElementById('toggle-link');

        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            const isLogin = header.textContent === 'Login';

            if (isLogin) {
                header.textContent = 'Sign Up';
                container.innerHTML = 
                    <form id="signup-form">
                        <div class="form-group">
                            <label for="signup-email">Email</label>
                            <input type="email" id="signup-email" placeholder="Enter your email" required> </input>
                        </div>
                        <div class="form-group">
                            <label for="signup-password">Password</label>
                            <input type="password" id="signup-password" placeholder="Enter your password" required> </input>
                        </div>
                        <div class="form-group">
                            <label for="signup-confirm-password">Confirm Password</label>
                            <input type="password" id="signup-confirm-password" placeholder="Confirm your password" required> </input>
                        </div>
                        <div class="form-group">
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                ;
                toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Login</a>';
            } else {
                header.textContent = 'Login';
                container.innerHTML = 
                    <form id="login-form">
                        <div class="form-group">
                            <label for="login-email">Email</label>
                            <input type="email" id="login-email" placeholder="Enter your email" required> </input>
                        </div>
                        <div class="form-group">
                            <label for="login-password">Password</label>
                            <input type="password" id="login-password" placeholder="Enter your password" required> </input>
                        </div>
                        <div class="form-group">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                ;
                toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Sign Up</a>';
            }
        });
    