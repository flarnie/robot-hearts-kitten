namespace :rhk do
  desc "TODO"
  task :clean_highscores => :environment do
    Score.where("time < 0").each do |score|
      balanced_score = score.time + (Score::COOKIE_VAL * score.cookies)
      if balanced_score < 0
        score.destroy
      end
    end
  end
  
  task :clear_highscores => :environment do
    Score.all.destroy
  end

end
