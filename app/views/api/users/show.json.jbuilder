
json.set! @user.id do
    json.extract! @user, :first_name, :last_name, :email, :dob, :gender, :pronoun
end

