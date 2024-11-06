import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Zap, Star } from "lucide-react"
export default function Page(){
  
  // Placeholder user data
  const user = {
    name: "Firas Amara",
    username: "barnoTD",
    level: 100,
    xp: 250000,
    xpToNextLevel: 3200000,
    status: "Quiz Enthusiast",
    avatarUrl: "https://avatars.githubusercontent.com/u/105167354?v=4",
    badges: ["Science Whiz", "History Buff", "Math Prodigy"],
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-yellow-700 to-orange-500 text-white shadow-xl">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="w-20 h-20 border-2 border-purple-600">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
          <p className="text-sm opacity-80">@{user.username}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-purple-600 " />
            <span className="font-semibold">Level {user.level}</span>
          </div>
          <Badge variant="secondary" className="text-yellow-400 bg-purple-800">
            {user.status}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>XP</span>
            <span>{user.xp} / {user.xpToNextLevel}</span>
          </div>
          <Progress value={(user.xp / user.xpToNextLevel) * 100} className="h-2 bg-purple-300" />
        </div>
        <div className="flex flex-wrap gap-2">
          {user.badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="bg-purple-700 text-yellow-400 border-yellow-400">
              {badge}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-purple-400">
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Quick Learner</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Top 10%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}