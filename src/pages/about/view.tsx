import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AboutPageView() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section className="flex flex-col items-center text-center space-y-4">
        <Avatar className="h-32 w-32 border-1">
          <AvatarImage src="/profile.jpeg" alt="Profile" />
          <AvatarFallback>BS</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">백상수</h1>
          <p className="text-xl text-muted-foreground">풀스택 엔지니어</p>
        </div>
        <p className="max-w-2xl text-muted-foreground leading-relaxed whitespace-pre-line">
          2021년부터 커리어를 시작한 풀스택 개발자입니다. Node.js 백엔드
          개발자로 커리어를 시작하였고 이후 프론트엔드 개발 보조로 업무를 도우며
          백엔드, 프론트엔드, 클라우드 인프라 구축 능력을 겸비한 풀스택 개발자로
          성장하였습니다.
        </p>
      </section>

      <Separator />

      {/* Contact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="https://github.com/onehunnitconst" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="https://linkedin.com/in/onehunnitconst" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="mailto:skygana@gmail.com" target="_blank">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button>
          
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">아그리코어</h3>
              <div className="text-sm text-muted-foreground">
                연구원 • 2025 - 현재
              </div>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>풀스택 개발</li>
              <li>R&D 과제 실제 개발 및 테스트</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-semibold">랩이오사</h3>
              <div className="text-sm text-muted-foreground">
                풀스택 개발자 • 2021 - 2025
              </div>
            </div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Node.js 및 NestJS 기반 API 서버 개발</li>
              <li>AWS 인프라 구축 및 운용</li>
              <li>Flutter 및 Next.js 프레임워크 기반 서비스 개발 보조</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">언어</h3>
            <div className="flex gap-2 flex-wrap">
              {[
                'JavaScript',
                'TypeScript',
                'Dart',
                'Python',
                'Kotlin',
                'Swift',
              ].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">백엔드 프레임워크</h3>
            <div className="flex gap-2 flex-wrap">
              {['NestJS', 'FastAPI'].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">프론트엔드 프레임워크</h3>
            <div className="flex gap-2 flex-wrap">
              {['Flutter', 'Next.js'].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">데이터베이스</h3>
            <div className="flex gap-2 flex-wrap">
              {['PostgreSQL', 'Redis', 'AWS DynamoDB'].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">배포 및 운용</h3>
            <div className="flex gap-2 flex-wrap">
              {['Docker', 'AWS', 'Ubuntu', 'NGINX', 'Jenkins', 'Firebase'].map(
                (tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
