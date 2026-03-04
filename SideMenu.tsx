import { Home, Sword, BookOpen, Users, Gift, Calendar, Settings } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { icon: Home, label: '홈', id: 'home' },
  { icon: Sword, label: '전투', id: 'battle' },
  { icon: BookOpen, label: '스토리', id: 'story' },
  { icon: Users, label: '캐릭터', id: 'characters' },
  { icon: Gift, label: '상점', id: 'shop' },
  { icon: Calendar, label: '이벤트', id: 'event' },
  { icon: Settings, label: '설정', id: 'settings' },
];

export function SideMenu() {
  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-40 w-full px-4">
      <div className="flex items-center justify-center md:justify-center gap-4 md:gap-8 max-w-full overflow-x-auto bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl md:rounded-none px-4 py-3 md:p-0 shadow-lg md:shadow-none border md:border-0 border-gray-200/50">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`flex flex-col items-center gap-1 md:gap-1.5 transition-all hover:scale-110 min-w-[56px] md:min-w-0 ${
                isActive ? 'text-emerald-500' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-xs ${isActive ? 'font-medium' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
