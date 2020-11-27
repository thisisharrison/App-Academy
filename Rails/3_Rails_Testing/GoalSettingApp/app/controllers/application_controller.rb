class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_user, :current_user_id, :current_user_username, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token] )
    end

    def current_user_id
        current_user ? current_user.id : nil
    end

    def current_user_username
        current_user ? current_user.username : nil
    end

    def login!(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token!
    end

    def logout!(user)
        @current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def require_login!
        redirect_to new_session_url unless current_user
    end
    


end
