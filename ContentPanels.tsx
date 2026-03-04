import {
  ChevronRight,
  Star,
  Clock,
  Gift,
  Zap,
  Trophy,
  Map,
} from "lucide-react";
import { motion } from "motion/react";

export function ContentPanels() {
  return (
    <>
      {/* 데스크탑: 왼쪽 패널들 */}
      <div
        className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 space-y-4 z-30 w-80"
        style={{
          perspective: "3000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* 스토리 챕터 */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 30 }}
          animate={{ opacity: 1, x: 0, rotateY: 30 }}
          transition={{ delay: 0.3 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="h-28 bg-gradient-to-br from-emerald-400 to-teal-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="absolute bottom-3 left-4 right-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/90 text-xs mb-0.5 tracking-wider">
                    MAIN STORY
                  </div>
                  <div className="text-white font-bold">
                    제 5-3 챕터
                  </div>
                </div>
                <div className="bg-white/25 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-medium">
                  50%
                </div>
              </div>
            </div>
          </div>
          <div className="p-3.5 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              새로운 이야기가 기다립니다
            </p>
            <ChevronRight className="w-4 h-4 text-emerald-500" />
          </div>
        </motion.div>

        {/* 일일 미션 */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 30 }}
          animate={{ opacity: 1, x: 0, rotateY: 30 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-sm">
                  일일 미션
                </span>
                <div className="text-xs text-gray-500">
                  오늘의 목표를 달성하세요
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                진행률
              </span>
              <span className="font-bold text-emerald-500">
                5/10
              </span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* 특별 이벤트 */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 30 }}
          animate={{ opacity: 1, x: 0, rotateY: 30 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-emerald-600 text-xs font-medium">
                    LIMITED
                  </div>
                  <div className="text-gray-800 font-bold text-sm">
                    특별 임무
                  </div>
                </div>
              </div>
              <div className="text-emerald-600 text-xs font-bold bg-white/80 px-2.5 py-1 rounded-full">
                NEW
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 데스크탑: 오른쪽 패널들 */}
      <div
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-30 w-80"
        style={{
          perspective: "3000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* 캐릭터 모집 */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: -30 }}
          transition={{ delay: 0.3 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="h-28 bg-gradient-to-br from-teal-400 to-cyan-500 relative overflow-hidden">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              style={{ backgroundSize: "200% 200%" }}
            ></motion.div>
            <div className="absolute bottom-3 left-4 right-4">
              <div className="text-white">
                <div className="text-white/90 text-xs mb-0.5 tracking-wider">
                  RECRUIT
                </div>
                <div className="font-bold">
                  동료 모집
                </div>
              </div>
            </div>
          </div>
          <div className="p-3.5 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              새로운 동료를 영입하세요
            </p>
            <ChevronRight className="w-4 h-4 text-teal-500" />
          </div>
        </motion.div>

        {/* 랭킹 */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: -30 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-sm">
                  랭킹
                </span>
                <div className="text-xs text-gray-500">
                  현재 순위: #127
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <div className="text-xl font-bold text-emerald-500">
                12
              </div>
              <div className="text-xs text-gray-500">승리</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center flex-1">
              <div className="text-xl font-bold text-gray-400">
                3
              </div>
              <div className="text-xs text-gray-500">패배</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center flex-1">
              <div className="text-xl font-bold text-teal-500">
                80%
              </div>
              <div className="text-xs text-gray-500">승률</div>
            </div>
          </div>
        </motion.div>

        {/* 지역 탐험 */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: -30 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="h-24 bg-gradient-to-br from-cyan-400 to-teal-500 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <div className="text-white">
                <div className="text-white/90 text-xs mb-0.5 tracking-wider">
                  EXPLORATION
                </div>
                <div className="font-bold text-sm">
                  지역 탐험
                </div>
              </div>
              <Map className="w-7 h-7 text-white/70" />
            </div>
          </div>
        </motion.div>

        {/* 이벤트 배너들 */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: -30 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-3 hover:shadow-xl transition-all cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-2 shadow-md">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-bold">이벤트</div>
            <div className="text-xs text-gray-500 mt-0.5">
              진행중
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-3 hover:shadow-xl transition-all cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mb-2 shadow-md">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-bold">보상</div>
            <div className="text-xs text-gray-500 mt-0.5">
              수령 가능
            </div>
          </div>
        </motion.div>
      </div>

      {/* 모바일/태블릿: 상단 패널들 */}
      <div className="lg:hidden fixed top-20 left-4 right-4 z-30 space-y-3">
        {/* 스토리 챕터 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="h-20 bg-gradient-to-br from-emerald-400 to-teal-500 relative overflow-hidden px-4 flex items-center justify-between">
            <div>
              <div className="text-white/90 text-xs mb-0.5 tracking-wider">
                MAIN STORY
              </div>
              <div className="text-white font-bold text-sm">
                제 5-3 챕터
              </div>
            </div>
            <div className="bg-white/25 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-xs font-medium">
              50%
            </div>
          </div>
        </motion.div>

        {/* 일일 미션 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-bold text-xs">일일 미션</div>
                <div className="text-xs text-gray-500">5/10 완료</div>
              </div>
            </div>
            <div className="h-2 w-20 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 모바일/태블릿: 하단 패널들 */}
      <div className="lg:hidden fixed bottom-20 left-4 right-4 z-30">
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-3"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-bold">랭킹</div>
            <div className="text-xs text-gray-500">#127</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-3"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center mb-2">
              <Map className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs font-bold">탐험</div>
            <div className="text-xs text-gray-500">시작</div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
